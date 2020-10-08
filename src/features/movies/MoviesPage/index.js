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
} from "../moviesSlice";
import MovieTile from "../MovieTile";
import Header from "../../../common/Header";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchGenres());
  }, []);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);

  const generateMovies = (movies) => {
    return movies.map((movie) => {
      return <MovieTile key={movie.id} movie={movie}></MovieTile>;
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
