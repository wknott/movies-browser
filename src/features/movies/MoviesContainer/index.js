import React from "react";
import { StyledMoviesContainer } from "./styled";

export const MoviesContainer = (props) => {
  return <StyledMoviesContainer>{props.children}</StyledMoviesContainer>;
};
