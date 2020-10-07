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

