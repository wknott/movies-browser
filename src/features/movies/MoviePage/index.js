import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie, selectLoading, selectMovie } from "../moviesSlice";
import { MoviePageTop, MainInfo, MovieLongTitle, MovieRatingImg, MovieRatingText, MovieRating, MovieRatingNote } from "./styled";
import star from "../MovieTile/ratingStar.svg";

export default () => {
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
    }
  }, [dispatch, id]);

  return (
    !loading ?
      <MoviePageTop src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}>
        <MainInfo>
          <MovieLongTitle>{movie.title}</MovieLongTitle>
          <MovieRating>
            <MovieRatingImg src={star}></MovieRatingImg>
            <MovieRatingNote>{movie.vote_average}</MovieRatingNote>
            <MovieRatingText>/10</MovieRatingText>
            <MovieRatingText>{movie.vote_count} votes</MovieRatingText>
          </MovieRating>
        </MainInfo>
      </ MoviePageTop>
      :
      <h1>Trwa ładowanie...</h1>
  )
};