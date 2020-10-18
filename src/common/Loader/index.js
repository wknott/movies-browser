import React from "react";
import loadingCircle from "./../../images/Loading.svg";
import { LoadingImg, LoadingContainer } from "./styled";

const Loader = () => (
    <LoadingContainer>
        <LoadingImg src={loadingCircle} />
    </LoadingContainer>
);

export default Loader;