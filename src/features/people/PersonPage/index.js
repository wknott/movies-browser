import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import PersonDetailsTile from "./PersonDetailsTile";
import { MoviesContainer } from "../../movies/MoviesContainer";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { moviesNavigation } from "../../../common/languages";
import { useQuery } from "@tanstack/react-query";
import { getPersonDetails, getPersonMovieCredits } from "../api";

const PersonPage = () => {
  const { id } = useParams();
  const language = useSelector(selectLanguage);

  const {
    data: person,
    isLoading: isPersonLoading,
    isError: isPersonError,
  } = useQuery(["person", { id, language }], getPersonDetails);

  const {
    data: movieCredits,
    isLoading: isMovieCreditsLoading,
    isError: isMovieCreditsError,
  } = useQuery(
    ["person-movie-credits", { id, language }],
    getPersonMovieCredits
  );

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Wrapper>
      {isPersonError || isMovieCreditsError ? (
        <Error />
      ) : isPersonLoading || isMovieCreditsLoading ? (
        <Loader />
      ) : (
        <>
          <PersonDetailsTile person={person} />
          <Header>
            {capitalizeFirstLetter(moviesNavigation[language])} -{" "}
            {movieCredits?.cast[language]?.toLowerCase()} (
            {movieCredits?.cast.length})
          </Header>
          <MoviesContainer movies={movieCredits?.cast.slice(0, 20)} />
          <Header>
            {capitalizeFirstLetter(moviesNavigation[language])} -{" "}
            {movieCredits?.crew[language]?.toLowerCase()} (
            {movieCredits?.crew.length})
          </Header>
          <MoviesContainer movies={movieCredits?.crew.slice(0, 20)} />
        </>
      )}
    </Wrapper>
  );
};
export default PersonPage;
