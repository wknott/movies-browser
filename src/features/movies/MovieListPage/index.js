import React, { useEffect } from "react";
import Header from "../../../common/Header";
import Wrapper from "../../../common/Wrapper";
import { getGenreName } from "../getGenreName";
import { MoviesContainer } from "../MoviesContainer";
import MovieTile from "../MovieTile";
const { useDispatch, useSelector } = require("react-redux");
const { fetchMoviesByQuery, selectMovies, selectLoading, selectGenres, fetchGenres, selectSearchQuery } = require("../moviesSlice");

const MovieListPage = () => {
 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMoviesByQuery("frozen"));
  }, [dispatch]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const query = useSelector(selectSearchQuery);

  const mapGenreIds = (genreIds, genres) => {
    return genreIds.map((genreId) => {
      return getGenreName(genreId, genres);
    });
  };

  const generateMovies = (movies) => {
    return movies.map((movie) => {
      const genreNames = mapGenreIds(movie.genre_ids, genres);
      return (
        <MovieTile
          key={movie.id}
          genreNames={genreNames}
          movie={movie}
        ></MovieTile>
      );
    });
  };

  if (!loading) {
    return (
      <div className="App">
        <Wrapper>
        <Header>Search results for "{query}"</Header>
          <MoviesContainer>{generateMovies(movies.results)}</MoviesContainer>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};

export default MovieListPage;
