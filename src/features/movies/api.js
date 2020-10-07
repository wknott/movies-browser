export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  };

  const popularMovies = await response.json();

  return popularMovies.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  };

  const movieDetails = await response.json();

  return movieDetails;
};

export const getMovieCredits = async (movieId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    new Error(response.statusText);
  };

  const movieCredits = await response.json();

  return movieCredits;
};