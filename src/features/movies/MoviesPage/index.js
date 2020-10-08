import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  fetchPopularMovies,
  selectLoading,
  selectMovies,
  fetchGenres,
  selectGenres,
} from "../moviesSlice";
import MovieTile from "../MovieTile";
import Header from "../../../common/Header";
import { getGenreName } from "../getGenreName";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchPopularMovies());
  }, []);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);

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
          <Header>Popular movies</Header>
          <MoviesContainer>{generateMovies(movies)}</MoviesContainer>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};
