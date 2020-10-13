import React, { useEffect } from "react";
import Header from "../../../common/Header";
import Wrapper from "../../../common/Wrapper";
import { Pager } from "../../../pager/index"
import { getGenreName } from "../getGenreName";
import { MoviesContainer } from "../MoviesContainer";
import MovieTile from "../MovieTile";
const { useDispatch, useSelector } = require("react-redux");
const { fetchMoviesByQuery, selectMovies, selectLoading, selectGenres, fetchGenres, selectSearchQuery, selectCurrentPage } = require("../moviesSlice");

const MovieListPage = () => {
 const dispatch = useDispatch();
 const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchMoviesByQuery({query:"frozen",page:currentPage}));
  }, [dispatch,currentPage]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const searchQuery = useSelector(selectSearchQuery);

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
          <Pager></Pager>
        <Header>Search results for "{searchQuery.query}"</Header>
          <MoviesContainer>{generateMovies(movies.results)}</MoviesContainer>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};

export default MovieListPage;
