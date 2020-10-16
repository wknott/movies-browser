const apiKey = process.env.REACT_APP_API_KEY;

export const getMovies = async ({ query, page }) => {
  const url = query ?
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${page}` :
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movies = await response.json();

  return movies;
};

export const getGenres = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movieDetails = await response.json();

  return movieDetails;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movieCredits = await response.json();

  return movieCredits;
};


