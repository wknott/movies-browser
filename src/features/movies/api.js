export const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=0e9e647ea010d8b3410709d41b745d87`
  );

  if (!response.ok) {
    new Error(response.statusText);
  }

  const movies = await response.json();

  return movies.results;
};
