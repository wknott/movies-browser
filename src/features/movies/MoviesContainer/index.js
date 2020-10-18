import React from "react";
import { StyledMoviesContainer } from "./styled";
import MovieTile from "../MovieTile";
import { nanoid } from "@reduxjs/toolkit";

export const MoviesContainer = ({ movies }) => (
  <StyledMoviesContainer>
    {movies.map(movie =>
      <MovieTile
        key={nanoid()}
        movie={movie}
      />
    )
    }
  </StyledMoviesContainer>
);
