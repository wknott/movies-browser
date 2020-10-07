import React from "react";
import { StyledTile } from "./styledTile";

const Tile = ({ className, children }) => {
  return <StyledTile className={className}>{children}</StyledTile>;
};

/* dodałem parametr className, ponieważ przyda nam 
się rozszerzanie tego komponentu o dodatkowe 
style w innych miejscach */

export default Tile;
