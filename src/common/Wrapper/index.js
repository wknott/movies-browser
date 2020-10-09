import React from "react";
import StyledWrapper from "./styled";

const Wrapper = (props) => {
  return <StyledWrapper>{props.children}</StyledWrapper>;
};

export default Wrapper;
