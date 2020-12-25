import React from "react";
import PersonTile from "../PersonTile";
import { StyledPeopleContainer } from "./styled";

const PeopleContainer = ({ people }) => (
  <StyledPeopleContainer>
    {people !== [] ? people.map(person =>
      <PersonTile key={`${person.id}-${person.job}-${person.character}`} person={person} />) :
      <></>
    }
  </StyledPeopleContainer>
);

export default PeopleContainer;