const API_KEY = '45152595-000e166ccff08e1330e527827';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const response = await fetch(`${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  return response.json();
}