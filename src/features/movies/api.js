export const getPopularMovies = async () => {

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movies = await response.json();

  return movies.results;
};
