import React, { useEffect } from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useDispatch } from "react-redux";
import { fetchPopularPeople } from "../peopleSlice";

export default () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPopularPeople())
  }, [dispatch]);

  return (
    <Wrapper>
      <Header>Popular people</Header>
      <PeopleContainer people={people} />
    </Wrapper>
  )
};