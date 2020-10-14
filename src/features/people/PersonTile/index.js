import React from "react";
import { StyledPersonTile, PersonImage, PersonName, DefaultImageContainer, DefaultImage, Character } from "./styled";
import profile from "../../../images/Profile.svg";

const PersonTile = ({ person }) => (
  <StyledPersonTile>
    {person.profile_path ?
      <PersonImage src={`https://image.tmdb.org/t/p/w185${person.profile_path}`} /> :
      <DefaultImageContainer>
        <DefaultImage src={profile} />
      </DefaultImageContainer>
    }
    <PersonName>{person.name}</PersonName>
    {person.character &&
      <Character>{person.character}</Character>}
    {person.job &&
      <Character>{person.job}</Character>}
  </StyledPersonTile>
);

export default PersonTile;