import { fetchImages } from './js/pixabay-api.js';
import { renderImages, showNotification, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const form = document.getElementById('search-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const query = form.searchQuery.value.trim();

  if (query === '') {
    showNotification('Please enter a search query.', 'error');
    return;
  }

  clearGallery();
  showLoader();

  try {
    const { hits: images } = await fetchImages(query);
    hideLoader();

    if (images.length === 0) {
      showNotification('Sorry, there are no images matching your search query. Please try again!', 'error');
    } else {
      renderImages(images);
    }
  } catch (error) {
    hideLoader();
    showNotification('Failed to fetch images. Please try again later.', 'error');
  }
  
  form.searchQuery.value = '';

});