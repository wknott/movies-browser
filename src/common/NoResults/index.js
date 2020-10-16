import React from "react";
import noResult from "../../images/noResult.svg";
import { Wrapper, Header, ImgStyled } from "./styled";

const NoResult = () => {
  return (
    <Wrapper>
      <Header>Sorry, there are no results for "Muan"</Header>
      <ImgStyled src={noResult} alt="Searching not found" />
    </Wrapper>
  );
};

export default NoResult;
