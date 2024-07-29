export async function fetchImages(query) {
  const API_KEY = '45152595-000e166ccff08e1330e527827';
  const BASE_URL = 'https://pixabay.com/api/';
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Fetch error: ', error);
  }
}
