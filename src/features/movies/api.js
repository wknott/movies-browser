const apiKey = "0e9e647ea010d8b3410709d41b745d87";
const apiUrl = "https://api.themoviedb.org/3/";

export const getMovies = async ({ query, page, language }) => {
  const url = query ?
    `${apiUrl}search/movie?api_key=${apiKey}&language=${language}&query=${query}&page=${page}` :
    `${apiUrl}movie/popular?api_key=${apiKey}&language=${language}&page=${page}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movies = await response.json();

  return movies;
};

export const getGenres = async ({ language }) => {
  const response = await fetch(
    `${apiUrl}genre/movie/list?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres;
};

export const getMovieDetails = async ({ id, language }) => {
  const response = await fetch(
    `${apiUrl}movie/${id}?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const movieDetails = await response.json();

  return movieDetails;
};

export const getMovieCredits = async ({ id, language }) => {
  const response = await fetch(
    `${apiUrl}movie/${id}/credits?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const movieCredits = await response.json();

  return movieCredits;
};


