//console.log('Connected')
// Getting imdbId from url
let imdbId = Qs.parse(location.search, {
  ignoreQueryPrefix: true
}).id;

//console.log(imdbId)


axios.get(`http://www.omdbapi.com/?apikey=d6513d72&i=${imdbId}`).then(data => {
  let movieObj = data.data;
  // console.log(movieObj);
  let nopost = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDEFJjA-DeyAReBX0I07U5whR9p-FntQETVA&usqp=CAU'
  let movieCard = `

  <div class="container mb-0 pt-3">
  <!--Card-->
  <div class="card mb-3" style="max-width: 100%;">
  <div class="row no-gutters">
  <div class="col-md-4">
  <img src="${(movieObj.Poster === 'N/A')?nopost: movieObj.Poster}" class="card-img" alt="...">
  </div>
  <div class="col-md-8">
  <div class="card-body">
  <h3 class="card-title text-bold">${movieObj.Title} (${movieObj.Year})</h3>
  <p>
  IMDB Rating:
  <i class="fa fa-star fa-2x" style="color:orange;"></i><span class="display-4">${movieObj.imdbRating}</span><span class="text-muted">/10</span>
  </p>
  <p class="card-text">
  Plot :  ${movieObj.Plot}
  </p>
  <a class='btn btn-primary' target='_blank' href='https://www.imdb.com/title/${movieObj.imdbID}'>Visit IMDB</a>
  </div>
  </div>
  </div>
  </div>
  <!--/Card-->
  <!--Table-->
  <div id="table">
  <table class="table table-responsive table-bordered">
  <tbody id='tbody'>

  </tbody>
  </table>
  </div>
  <!--/Table-->
  </div>
  `
  $('#showMovie').html(movieCard)
  for (key in movieObj) {
    let tableContent = `
    <tr>
    <td>${key}</td>
    <td class='text-wrap text-break' >${(typeof movieObj[key] == 'string')?movieObj[key]: 'No information'}</td>
    </tr>
    `
    $('#tbody').append(tableContent)
  }



}).catch(err => {
  console.log(err)
})



// http: //www.omdbapi.com/?i=tt3896198&apikey=d6513d72