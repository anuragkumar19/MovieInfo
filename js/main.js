$(document).ready(()=> {
  //JavaScript Here
  //console.log('Connection Eshtablished');
  $("#searchForm").submit((e) => {
    event.preventDefault();
    let query = $('#searchInp').val();
    query = query.trim()
    getMovies(query)
  });
});







function getMovies(q) {
  axios.get(`http://www.omdbapi.com/?apikey=d6513d72&s=${q}`).then(data => {
    let movieArr = data.data.Search;
    //console.log(movieArr);
    let nopost = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDEFJjA-DeyAReBX0I07U5whR9p-FntQETVA&usqp=CAU'
    movieArr.forEach(movie => {
      let movieCard = `
      <div class="card text-center">
      <img class="card-img-top" src="${(movie.Poster === 'N/A')?nopost: movie.Poster}" alt="No Poster Available">
      <div class="card-body">
      <h5 class="card-title text-center">${movie.Title}(${movie.Year})</h5>
      <a href="movie.html?id=${movie.imdbID}" class="btn btn-primary">View Detail</a>
      </div>
      </div>
      `
      $('#CardCont').append(movieCard)
    })



  }).catch(err => {
    console.log(err)
  })
}



//http://www.omdbapi.com/?i=tt3896198&apikey=d6513d72
