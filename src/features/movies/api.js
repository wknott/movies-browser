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
