import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNotification, showLoader, hideLoader } from './js/render-functions.js';

const form = document.getElementById('search-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = form.searchQuery.value.trim();

  if (query === '') {
    showNotification('Please enter a search query.', 'error');
    return;
  }

  showLoader();

  const images = await fetchImages(query);

  hideLoader();

  if (images.length === 0) {
    showNotification('Sorry, there are no images matching your search query. Please try again!', 'error');
  } else {
    renderImages(images);
  }
});
