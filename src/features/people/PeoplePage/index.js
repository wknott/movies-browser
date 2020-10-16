import React, { useEffect } from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularPeople, selectLoading, selectPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Loader from "../../../common/Loader";

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
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
  )
};