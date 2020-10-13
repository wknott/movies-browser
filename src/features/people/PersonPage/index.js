import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPerson, selectLoading, selectPerson } from "../peopleSlice";
import Wrapper from "../../../common/Wrapper";
import PersonDetailsTile from "./PersonDetailsTile";

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
      </Wrapper>
      :
      <h1>Loading...</h1>
  )
};