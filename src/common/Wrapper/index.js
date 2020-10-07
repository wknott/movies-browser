import React from "react";
import StyledWrapper from "./styledWrapper";

const Wrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Wrapper;
