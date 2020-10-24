import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { toMovie, toMovies, toPeople, toPerson } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import MoviePage from "./features/movies/MoviePage";
import MoviesPage from "./features/movies/MoviesPage";
import PersonPage from "./features/people/PersonPage";
import PeoplePage from "./features/people/PeoplePage";
import Navigation from "./common/Navigation/";
import ScrollArrow from "./common/ScrollArrow/";

export default () => {
    const isDark = true;
    const currentTheme = isDark ? darkTheme : theme;

  return (
  <HashRouter>
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Navigation />
      <ScrollArrow />
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
    </ThemeProvider>
  </HashRouter>
);}
