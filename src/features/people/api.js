import { apiKey, apiUrl } from "../../common/api";

export const getPeople = async ({ page, query, language }) => {
  const url = query ? `${apiUrl}search/person?api_key=${apiKey}&language=${language}&query=${query}&page=${page}`
    : `${apiUrl}person/popular?api_key=${apiKey}&language=${language}&page=${page}`

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  };
  const people = await response.json();

  return people;
};

export const getPersonDetails = async ({ id, language }) => {
  const response = await fetch(
    `${apiUrl}person/${id}?api_key=${apiKey}&language=${language}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  };
  const personDetails = await response.json();

  return personDetails;
};

export const getPersonMovieCredits = async ({ id, language }) => {
  const response = await fetch(
    `${apiUrl}person/${id}/movie_credits?api_key=${apiKey}&language=${language}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  };

  const PersonMovieCredits = await response.json();

  return PersonMovieCredits;
}; 