import React from "react";
import { StyledPersonTile, PersonImage, PersonName } from "./styled";
import profile from "../../../images/Profile.svg";

const PersonTile = ({ person }) => (
  <StyledPersonTile>
    <PersonImage src={`https://image.tmdb.org/t/p/w185${person.profile_path}` || profile} />
    <PersonName>{person.name}</PersonName>
  </StyledPersonTile>
);

export default PersonTile;