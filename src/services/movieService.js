const API_URL = "https://devsapihub.com/api-movies";

async function request(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error HTTP: ${response.status}`);
  }
  return response.json();
}

export async function checkApiConnection() {
  const response = await fetch(API_URL, { method: "HEAD" });
  return response.ok;
}

export function getMovies() {
  return request(API_URL);
}

export function getMovieById(id) {
  return request(`${API_URL}/${id}`);
}

export async function searchMovies(text) {
  const movies = await getMovies();
  const query = text.trim().toLowerCase();
  if (!query) {
    return movies;
  }
  return movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query) ||
      movie.genre.some((genre) => genre.toLowerCase().includes(query)) ||
      String(movie.year).includes(query),
  );
}
