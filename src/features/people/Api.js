export const getPopularPeople = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) {
      new Error(response.statusText);
    };
    const popularPeople = await response.json();
    console.log(getPopularPeople());
    return popularPeople.results;
  };

  export const getPersonDetails = async (personId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    if (!response.ok) {
      new Error(response.statusText);
    };
    const personDetails = await response.json();
  
    return personDetails;
  };

  export const getPersonMovieCredits = async (personId) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`
    );
  
    if (!response.ok) {
      new Error(response.statusText);
    };
  
    const PersonMovieCredits = await response.json();
  
    return PersonMovieCredits;
  }; 