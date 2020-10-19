import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchPerson, selectError, selectLoading, selectPerson } from "../peopleSlice";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import PersonDetailsTile from "./PersonDetailsTile";
import { MoviesContainer } from "../../movies/MoviesContainer";
import Loader from "../../../common/Loader";
import searchQueryParamName from "../../searchQueryParamName";
import { useQueryParameter } from "../../search/queryParameters";
import Error from "../../../common/Error/index";

export default () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const person = useSelector(selectPerson);
  const loading = useSelector(selectLoading);
  const query = useQueryParameter(searchQueryParamName);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchPerson(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (query) {
      history.push(`/people?${searchParams.toString()}`);
    }
  }, [query, history, searchParams]);

  if(error)
  {
    return  <Wrapper> 
              <Error/>
            </Wrapper> 
  }

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
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
  )
};