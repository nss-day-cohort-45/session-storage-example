export const renderFavoriteMovieDisplay = (favoriteMovie) => {
  const htmlElement = document.querySelector(".favorite-movie-display-container");
  htmlElement.innerHTML = `
    <h1>${favoriteMovie}</h1>
    <button id="clear-favorite-movie-btn">Clear</button>
  `;
};

export const clearDisplay = () => {
  const displayElement = document.querySelector(".favorite-movie-display-container");
  displayElement.innerHTML = '';
}

export const addClearEventListener = () => {
  const container = document.querySelector('.favorite-movie-display-container');
  container.addEventListener('click', (evt) => {
    if (evt.target.id !== 'clear-favorite-movie-btn') {
      return;
    }

    sessionStorage.removeItem('favoriteMovie');

    const eventHub = document.querySelector('.container');
    eventHub.dispatchEvent(new CustomEvent('favoriteMovieChanged'));
  });
}

