const API_URL = "https://devsapihub.com/api-movies";

export async function getMovies() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

export function filterMovies(movies, text) {
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
