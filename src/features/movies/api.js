import { apiKey, apiUrl } from "../../common/api";

export const getMovies = async ({ queryKey }) => {
  const [, { page, query, language }] = queryKey;

  const params = new URLSearchParams({
    language,
    page: page || 1,
    ...(query && { query }),
  });

  const url = `${apiUrl}${
    query ? "search/movie" : "movie/popular"
  }?api_key=${apiKey}&${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getGenres = async ({ queryKey }) => {
  const [, { language }] = queryKey;

  const response = await fetch(
    `${apiUrl}genre/movie/list?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  return data.genres;
};

export const getMovieDetails = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const response = await fetch(
    `${apiUrl}movie/${id}?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getMovieCredits = async ({ queryKey }) => {
  const [, { id, language }] = queryKey;

  const response = await fetch(
    `${apiUrl}movie/${id}/credits?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
