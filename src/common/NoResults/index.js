import React from "react";
import Img from "./../../images/NoResults.svg";
import { NoResultsImg, NoResultsContainer } from "./styled";

const NoResults = () => (
    <NoResultsContainer>
        <NoResultsImg src={Img} />
    </NoResultsContainer>
);

export default NoResults;