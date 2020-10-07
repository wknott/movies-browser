export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movies = await response.json();

  return movies.results;
};
