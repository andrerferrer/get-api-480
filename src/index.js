
// fetch using GET request

// fetch(url)
//   .then(transform the response into json)
//   .then(show this data received in the dom)

// PS:
// this
// .then((response) => {
//   return response.json()
// })

// is the same as 
// .then(response => response.json())

const insertMovieIntoDOM = (movie) => {
      // console.log(data);
      // take this data and insert it to the DOM
      // this is the ruby way
      // const title = data['Title']
      // this is the js way
      const title = movie.Title;
      const posterUrl = movie.Poster;
      const movieHTML = `
      <li>
        <p>${title}</p>
        <img src="${posterUrl}" alt="">
      </li>      
      `;
  
      // const list = document.querySelector('#results');
      const list = document.getElementById('results');
      list.insertAdjacentHTML('beforeend', movieHTML);
};

const fetchApiAndUpdateTheDOM = (movieName) => {
  const url = `http://www.omdbapi.com/?s=${movieName}&apikey=adf1f2d7`

  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const moviesArray = data.Search;
      
      // before inserting again, we will clean it
      const list = document.getElementById('results');
      list.innerHTML = '';
      
      // insert each movie in the DOM
      moviesArray.forEach( (movie) => {
        insertMovieIntoDOM(movie);
      });
    });
};

// select the form
const form = document.querySelector('#search-movies');
// add an event listener to the form
// form.addEventListener('EVENT', () => {})

// there is ONE event that happens only and only on forms
// SUBMIT
form.addEventListener('submit', (event) => {
  // we need this because the default behavior of the submit event is to "reload the page"
  event.preventDefault();
  
  // find the input inside the form
  const input = form.querySelector('#keyword');
  // extract the movie name from it
  const movieName = input.value;
  // with this movie name, we call the function
  fetchApiAndUpdateTheDOM(movieName);
})

// when the form is submited,
// we will call the function

