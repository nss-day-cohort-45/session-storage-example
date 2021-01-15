export const clearForm = () => {
  const formElement = document.querySelector(".favorite-movie-form-container");
  formElement.innerHTML = '';
}

export const addFavoriteMovieEventListener = () => {
  const container = document.querySelector('.favorite-movie-form-container');
  container.addEventListener('click', (evt) => {
    if (evt.target.id !== 'favorite-movie-save-btn') {
      return;
    }

    const favoriteMovieInput = document.querySelector('#favorite-movie');
    if (!favoriteMovieInput.value?.trim()) {
      return;
    }

    sessionStorage.setItem('favoriteMovie', favoriteMovieInput.value);

    const eventHub = document.querySelector('.container');
    eventHub.dispatchEvent(new CustomEvent('favoriteMovieChanged'));
  });
}

export const renderFavoriteMovieForm = () => {
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
