import React from "react";
import noConnect from "../../images/noConnect.svg";
import { ErrorContainer, ErrorImg, ErrorTitle, ErrorText, ReturnButton } from "./styled";
import { toMovies } from "../../routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../Navigation/LanguageSelect/languageSlice";
import { errorText, errorTitle, returnButton } from "../../languages";

const NoConnection = () => {
  const language = useSelector(selectLanguage);

  return (
    <ErrorContainer>
      <ErrorImg src={noConnect} alt="noConnectImage"></ErrorImg>
      <ErrorTitle>{errorTitle[language]}</ErrorTitle>
      <ErrorText>{errorText[language]}</ErrorText>
      <ReturnButton as={Link} to={toMovies()}>{returnButton[language]}</ReturnButton>
    </ErrorContainer>
  );
};

export default NoConnection;
