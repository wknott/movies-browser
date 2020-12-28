import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchPerson,
  selectError,
  selectLoading,
  selectPerson,
} from "../peopleSlice";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import PersonDetailsTile from "./PersonDetailsTile";
import { MoviesContainer } from "../../movies/MoviesContainer";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import { cast, crew, moviesNavigation } from "../../../common/languages";

const PersonPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (id) {
      dispatch(fetchPerson({ id, language }));
    }
  }, [dispatch, id, language]);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  return !loading && person ? (
    <Wrapper>
      <PersonDetailsTile person={person} />
      <Header>
        {capitalizeFirstLetter(moviesNavigation[language])} -{" "}
        {cast[language].toLowerCase()} ({person.cast.length})
      </Header>
      <MoviesContainer movies={person.cast.slice(0, 20)} />
      <Header>
        {capitalizeFirstLetter(moviesNavigation[language])} -{" "}
        {crew[language].toLowerCase()} ({person.crew.length})
      </Header>
      <MoviesContainer movies={person.crew.slice(0, 20)} />
    </Wrapper>
  ) : (
    <Wrapper>
      <Loader></Loader>
    </Wrapper>
  );
};
export default PersonPage;
