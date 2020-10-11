export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const popularMovies = await response.json();

  return popularMovies.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movieDetails = await response.json();

  return movieDetails;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movieCredits = await response.json();

  return movieCredits;
};
export const getMoviesByName = async (input) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${input}&page=1`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movies = await response.json();

  return movies;
};

export const getGenres = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres;
};
