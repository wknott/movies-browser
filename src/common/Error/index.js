import React from "react";
import noConnect from "../../images/noConnect.svg";
import {ErrorContainer, ErrorImg, ErrorTitle, ErrorText, ReturnButton} from "./styled";

const NoConnection = () => {
    return (
<ErrorContainer>
  <ErrorImg src={noConnect} alt="noConnectImage"></ErrorImg>
  <ErrorTitle>Ooops! Something went wrong...</ErrorTitle>
  <ErrorText>Please check your network connection and try again</ErrorText>
  <ReturnButton>Back to home page</ReturnButton>
</ErrorContainer>
    );
};

export default NoConnection;
