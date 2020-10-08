import React from "react";
import { useParams } from "react-router-dom";
import { MoviePageTop } from "./styled";

export default () => {
  const { id } = useParams();

  return (
    <MoviePageTop src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
    </MoviePageTop>
  )
};