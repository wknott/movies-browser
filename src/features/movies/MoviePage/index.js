import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  MovieBackdrop,
  MainInfo,
  MovieLongTitle,
  MovieRatingImg,
  MovieRatingText,
  MovieRating,
  MovieRatingNote,
  MovieRatingTextVote,
} from "./styled";
import star from "../MovieTile/ratingStar.svg";
import Wrapper from "../../../common/Wrapper";
import MovieDetailsTile from "./MovieDetailsTile";
import PeopleContainer from "../../people/PeopleContainer";
import Header from "../../../common/Header";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { cast, crew, votes } from "../../../common/languages";
import { useQuery } from "react-query";
import { getMovieCredits, getMovieDetails } from "../api";

const MoviePage = () => {
  const { id } = useParams();
  const language = useSelector(selectLanguage);

  const {
    data: movie,
    isLoading: isMovieLoading,
    isError: isMovieError,
  } = useQuery(["movie", { id, language }], getMovieDetails);

  const {
    data: credits,
    isLoading: isCreditsLoading,
    isError: isCreditsError,
  } = useQuery(["credits", { id, language }], getMovieCredits);

  if (isMovieLoading || isCreditsLoading) {
    return (
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
    );
  }

  if (isMovieError || isCreditsError) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  return (
    <>
      {movie.backdrop_path && (
        <MovieBackdrop
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        >
          <MainInfo>
            <MovieLongTitle>{movie.title}</MovieLongTitle>
            <MovieRating>
              <MovieRatingImg src={star}></MovieRatingImg>
              <MovieRatingNote>{movie.vote_average.toFixed(1)}</MovieRatingNote>
              <MovieRatingText>/ 10</MovieRatingText>
              <MovieRatingTextVote>
                {movie.vote_count} {votes[language]}
              </MovieRatingTextVote>
            </MovieRating>
          </MainInfo>
        </MovieBackdrop>
      )}
      <Wrapper>
        <MovieDetailsTile movie={movie} />
        <Header>{cast[language]}</Header>
        <PeopleContainer people={credits.cast} />
        <Header>{crew[language]}</Header>
        <PeopleContainer people={credits.crew} />
      </Wrapper>
    </>
  );
};
export default MoviePage;
