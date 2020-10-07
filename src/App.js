import React from "react";
<<<<<<< HEAD
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
=======
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import MoviePage from "./features/movies/MoviePage";
import MoviesPage from "./features/movies/MoviesPage";
import PersonPage from "./features/people/PersonPage";
import PeoplePage from "./features/people/PeoplePage";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={toMovie()}>
        <MoviePage />
      </Route>
      <Route path={toMovies()}>
        <MoviesPage />
      </Route>
      <Route path={toPerson()}>
        <PersonPage />
      </Route>
      <Route path={toPeople()}>
        <PeoplePage />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </BrowserRouter>
);
>>>>>>> main
