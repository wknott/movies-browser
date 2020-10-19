export const getPeople = async ({ page , query }) => {
  const url =  query ? `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_API_KEY}&query=${query}&page=${page}`
    : `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`

    const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  };
  const people = await response.json();

  return people;
};

export const getPersonDetails = async (personId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
  );
  if (!response.ok) {
    throw new Error(response.statusText);
  };
  const personDetails = await response.json();

  return personDetails;
};

export const getPersonMovieCredits = async (personId) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  };

  const PersonMovieCredits = await response.json();

  return PersonMovieCredits;
}; 