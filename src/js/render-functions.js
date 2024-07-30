import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = images.map(image => `
    <a href="${image.largeImageURL}" class="gallery-item">
      <img src="${image.webformatURL}" alt="${image.tags}" />
      <div class="info">
        <p><b>Likes</b> ${image.likes}</p>
        <p><b>Views</b> ${image.views}</p>
        <p><b>Comments</b> ${image.comments}</p>
        <p><b>Downloads</b> ${image.downloads}</p>
      </div>
    </a>
  `).join('');

  const lightbox = new SimpleLightbox('.gallery-item', { captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250, });
  lightbox.refresh();
}

export function showNotification(message, type = 'success') {
  iziToast[type]({
    title: type === 'success' ? 'OK' : 'Error',
    message: message,
    position: 'topRight',
  });
}

export function clearGallery() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
}

export function showLoader() {
  const loader = document.getElementById('loader');
  loader.hidden = false;
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  loader.hidden = true;
}