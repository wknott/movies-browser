import React from "react";
import { StyledMoviesContainer } from "./styled";
import MovieTile from "../MovieTile";

export const MoviesContainer = ({ movies }) => (
  <StyledMoviesContainer>
    {movies.map(movie =>
      <MovieTile
        key={movie.id}
        movie={movie}
      />
    )
    }
  </StyledMoviesContainer>
);
