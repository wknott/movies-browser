import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPerson, selectLoading, selectPerson } from "../peopleSlice";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import PersonDetailsTile from "./PersonDetailsTile";
import { MoviesContainer } from "../../movies/MoviesContainer";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPerson(id));
  }, [dispatch, id])

  return (
    !loading && person ?
      <Wrapper>
        <PersonDetailsTile person={person} />
        <Header>Movies - cast ({person.cast.length})</Header>
        <MoviesContainer movies={person.cast.slice(0, 20)} />
        <Header>Movies - crew ({person.crew.length})</Header>
        <MoviesContainer movies={person.crew.slice(0, 20)} />
      </Wrapper>
      :
      <h1>Loading...</h1>
  )
};