import React from "react";
import { StyledTile } from "./styled";

const Tile = ({ children }) => {
  return <StyledTile>{children}</StyledTile>;
};

/* dodałem parametr className, ponieważ przyda nam 
się rozszerzanie tego komponentu o dodatkowe 
style w innych miejscach */

export default Tile;
