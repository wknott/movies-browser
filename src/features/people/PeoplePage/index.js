import React, { useEffect } from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectLoading, selectPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";

export default () => {
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchPopularPeople())
  }, [dispatch]);

  return (
    !loading
      ?
      <Wrapper>
        <Header>Popular people</Header>
        <PeopleContainer people={people} />
      </Wrapper>
      :
      <h1>trwa ładowanie...</h1>
  )
};