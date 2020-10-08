import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  fetchPopularMovies,
  selectLoading,
  selectMovies,
} from "../moviesSlice";
import MovieTile from "../MovieTile";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, []);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);

  const generateMovies = (movies) => {
    return movies.map((movie) => {
      return <MovieTile key={nanoid()} movie={movie}></MovieTile>;
    });
  };

  if (!loading) {
    return (
      <div className="App">
        <Wrapper>
          <h1>Popular movies</h1>
          <MoviesContainer>
            {generateMovies(movies.slice(0, 8))}
          </MoviesContainer>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};
