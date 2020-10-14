import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie, fetchMovieCredits, selectLoading, selectMovie, selectMovieCast, selectMovieCrew } from "../moviesSlice";
import {
  MovieBackdrop,
  MainInfo,
  MovieLongTitle,
  MovieRatingImg,
  MovieRatingText,
  MovieRating,
  MovieRatingNote
} from "./styled";
import star from "../MovieTile/ratingStar.svg";
import Wrapper from "../../../common/Wrapper";
import MovieDetailsTile from "./MovieDetailsTile";
import PeopleContainer from "../../people/PeopleContainer";
import Header from "../../../common/Header";

export default () => {
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const cast = useSelector(selectMovieCast);
  const crew = useSelector(selectMovieCrew);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie(id));
      dispatch(fetchMovieCredits(id));
    }
  }, [dispatch, id]);

  return (
    !loading && movie ?
      <>
        <MovieBackdrop src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
          <MainInfo>
            <MovieLongTitle>{movie.title}</MovieLongTitle>
            <MovieRating>
              <MovieRatingImg src={star}></MovieRatingImg>
              <MovieRatingNote>{movie.vote_average}</MovieRatingNote>
              <MovieRatingText>/ 10</MovieRatingText>
              <MovieRatingText>{movie.vote_count} votes</MovieRatingText>
            </MovieRating>
          </MainInfo>
        </MovieBackdrop>
        <Wrapper>
          <MovieDetailsTile movie={movie} />
          <Header>Cast</Header>
          <PeopleContainer people={cast} />
          <Header>Crew</Header>
          <PeopleContainer people={crew} />
        </Wrapper>
      </>
      :
      <h1>Trwa ładowanie...</h1>
  )
};