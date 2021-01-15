// This function is called at the bottom of the module
const startEverything = () => {
  addFavoriteMovieEventListener();
  addClearEventListener();

  const savedFavoriteMovie = sessionStorage.getItem('favoriteMovie');

  if (savedFavoriteMovie === null) {
    renderFavoriteMovieForm();
  } else {
    renderFavoriteMovieDisplay(savedFavoriteMovie);
  }
};


const clearScreen = () => {
  const displayElement = document.querySelector(".favorite-movie-display-container");
  displayElement.innerHTML = '';

  const formElement = document.querySelector(".favorite-movie-form-container");
  formElement.innerHTML = '';
}


const renderFavoriteMovieDisplay = (favoriteMove) => {
  const htmlElement = document.querySelector(".favorite-movie-display-container");
  htmlElement.innerHTML = `
    <h1>${favoriteMove}</h1>
    <button id="clear-favorite-movie-btn">Clear</button>
  `;
};


const addFavoriteMovieEventListener = () => {
  const container = document.querySelector('.container');
  container.addEventListener('click', (evt) => {
    if (evt.target.id !== 'favorite-movie-save-btn') {
      return;
    }

    const favoriteMovieInput = document.querySelector('#favorite-movie');
    const favoriteMovie = favoriteMovieInput.value;

    sessionStorage.setItem('favoriteMovie', favoriteMovie);

    clearScreen();
    renderFavoriteMovieDisplay(favoriteMovie);
  });
}


const addClearEventListener = () => {
  const container = document.querySelector('.container');
  container.addEventListener('click', (evt) => {
    if (evt.target.id !== 'clear-favorite-movie-btn') {
      return;
    }

    sessionStorage.removeItem('favoriteMovie');

    clearScreen();
    renderFavoriteMovieForm();
  });
}


const renderFavoriteMovieForm = () => {
  const htmlElement = document.querySelector(".favorite-movie-form-container");
  htmlElement.innerHTML = `
      <fieldset>
        <p>
          <label for"favorite-movie">Favorite Movie:</label>
          <input id="favorite-movie" placeholder="Enter your favorite movie"/>
        </p>
        <input id="favorite-movie-save-btn" type="submit" value="Record Favorite Movie" />
      </fieldset>`;
}


startEverything();