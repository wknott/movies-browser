import React from "react";
import Wrapper from "./common/Wrapper/index";
import MovieTile from "./features/movies/MovieTile/index";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  selectMovies,
  selectLoading,
} from "./features/movies/moviesSlice";
import { MoviesContainer } from "./features/movies/MoviesContainer";
import { nanoid } from "@reduxjs/toolkit";

function App() {
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
    console.log(movies[0]);
    return (
      <div className="App">
        <Wrapper>
          <MoviesContainer>{generateMovies(movies)}</MoviesContainer>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
}

export default App;
