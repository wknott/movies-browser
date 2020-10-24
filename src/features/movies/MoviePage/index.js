import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchMovie, selectError, selectLoading, selectMovie } from "../moviesSlice";
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
import Loader from "../../../common/Loader";
import { useQueryParameter } from "../../search/queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { votes } from "../../../languages";

export default () => {
  const { id } = useParams();
  const movie = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();
  const error = useSelector(selectError);
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovie({ id, language }));
    }
  }, [dispatch, id, language]);

  useEffect(() => {
    if (query) {
      history.push(`/movies?${searchParams.toString()}`);
    }
  }, [query, history, searchParams]);

  if (error) {
    return <Wrapper>
      <Error />
    </Wrapper>
  }

  return (
    !loading && movie && movie.credits.cast ?
      <>
        {movie.backdrop_path &&
          <MovieBackdrop src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>
            <MainInfo>
              <MovieLongTitle>{movie.title}</MovieLongTitle>
              <MovieRating>
                <MovieRatingImg src={star}></MovieRatingImg>
                <MovieRatingNote>{movie.vote_average}</MovieRatingNote>
                <MovieRatingText>/ 10</MovieRatingText>
                <MovieRatingText>{movie.vote_count} {votes[language]}</MovieRatingText>
              </MovieRating>
            </MainInfo>
          </MovieBackdrop>
        }
        <Wrapper>
          <MovieDetailsTile movie={movie} />
          <Header>Cast</Header>
          <PeopleContainer people={movie.credits.cast} />
          <Header>Crew</Header>
          <PeopleContainer people={movie.credits.crew} />
        </Wrapper>
      </>
      :
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
  )
};