import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovie, selectError, selectLoading, selectMovie } from "../moviesSlice";
import {
  MovieBackdrop,
  MainInfo,
  MovieLongTitle,
  MovieRatingImg,
  MovieRatingText,
  MovieRating,
  MovieRatingNote,
  MovieRatingTextVote
} from "./styled";
import star from "../MovieTile/ratingStar.svg";
import Wrapper from "../../../common/Wrapper";
import MovieDetailsTile from "./MovieDetailsTile";
import PeopleContainer from "../../people/PeopleContainer";
import Header from "../../../common/Header";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { cast, crew, votes } from "../../../languages";

export default () => {
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie({ id, language }));
    }
  }, [dispatch, id, language]);

  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  };

  return (
    !loading && movie && movie.credits.cast ?
      <>
        {movie.backdrop_path &&
          <MovieBackdrop src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
            <MainInfo>
              <MovieLongTitle>{movie.title}</MovieLongTitle>
              <MovieRating>
                <MovieRatingImg src={star}></MovieRatingImg>
                <MovieRatingNote>{movie.vote_average.toFixed(1)}</MovieRatingNote>
                <MovieRatingText>/ 10</MovieRatingText>
                <MovieRatingTextVote>{movie.vote_count} {votes[language]}</MovieRatingTextVote>
              </MovieRating>
            </MainInfo>
          </MovieBackdrop>
        }
        <Wrapper>
          <MovieDetailsTile movie={movie} />
          <Header>{cast[language]}</Header>
          <PeopleContainer people={movie.credits.cast} />
          <Header>{crew[language]}</Header>
          <PeopleContainer people={movie.credits.crew} />
        </Wrapper>
      </>
      :
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
  )
};