import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovieList, toMovies, toPeople, toPerson } from "./routes";
import MoviePage from "./features/movies/MoviePage";
import MoviesPage from "./features/movies/MoviesPage";
import PersonPage from "./features/people/PersonPage";
import PeoplePage from "./features/people/PeoplePage";
import MovieListPage from "./features/movies/MovieListPage";
import Navigation from "./Navigation/index";

export default () => (
  <HashRouter>
    <Navigation />
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
      <Route path={toMovieList()}>
        <MovieListPage />
      </Route>
      <Route>
        <Redirect to={toMovies()} />
      </Route>
    </Switch>
  </HashRouter>
);
