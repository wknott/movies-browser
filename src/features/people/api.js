import { apiKey, apiUrl } from "../../common/api";

export const getPeople = async ({ queryKey }) => {
  const [, { page, query, language }] = queryKey;

  const params = new URLSearchParams({
    language,
    page: page || 1,
    ...(query && { query }),
  });

  const url = `${apiUrl}${
    query ? "search/person" : "person/popular"
  }?api_key=${apiKey}&${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getPersonDetails = async ({ id, language }) => {
  const params = new URLSearchParams({
    language,
  });

  const url = `${apiUrl}person/${id}?api_key=${apiKey}&${params}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};

export const getPersonMovieCredits = async ({ id, language }) => {
  const params = new URLSearchParams({
    language,
  });

  const response = await fetch(
    `${apiUrl}person/${id}/movie_credits?api_key=${apiKey}&${params}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
