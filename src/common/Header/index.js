import React from "react";
import { StyledHeader } from "./styled";

const Header = (props) => {
  return <StyledHeader>{props.children}</StyledHeader>;
};

export default Header;
