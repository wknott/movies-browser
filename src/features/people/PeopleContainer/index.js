import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import PersonTile from "../PersonTile";
import { StyledPeopleContainer } from "./styled";

const PeopleContainer = ({ people }) => (
  <StyledPeopleContainer>
    {people !== [] ? people.map(person => <PersonTile key={nanoid()} person={person} />)
      : <h1>brak osób do pokazania</h1>}
  </StyledPeopleContainer>
);

export default PeopleContainer;