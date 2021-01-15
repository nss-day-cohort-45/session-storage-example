import {
  addFavoriteMovieEventListener, clearForm, renderFavoriteMovieForm
} from './favoriteMovieForm.js';

import {
  addClearEventListener, clearDisplay, renderFavoriteMovieDisplay
} from './FavoriteMovieDisplay.js';


const main = () => {
  addFavoriteMovieEventListener();
  addClearEventListener();
  addFavoriteMovieChangedEventListener();

  const eventHub = document.querySelector('.container');
  eventHub.dispatchEvent(new CustomEvent('favoriteMovieChanged'));
};


const addFavoriteMovieChangedEventListener = () => {
  const eventHub = document.querySelector('.container');
  eventHub.addEventListener('favoriteMovieChanged', () => {
    const favoriteMovie = sessionStorage.getItem('favoriteMovie');
    if (favoriteMovie) {
      clearForm();
      renderFavoriteMovieDisplay(favoriteMovie);
    } else {
      clearDisplay();
      renderFavoriteMovieForm();
    }
  })
}

main();