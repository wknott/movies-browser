import React, { useEffect } from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectError, selectLoading, selectPeople, selectTotalNumberOfPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Loader from "../../../common/Loader";
import { useQueryParameter } from "../../search/queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { Pager } from "../../../common/Pager";
import NoResults from "../../../common/NoResults";
import pageQueryParamName from "../../pageQueryParamName";
import Error from "../../../common/Error/index";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const currentPage = useQueryParameter(pageQueryParamName);
  const totalNumberOfPeople = useSelector(selectTotalNumberOfPeople);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchPeople({ page: currentPage, query }))
  }, [dispatch, currentPage, query]);

  if(error)
  {
    return  <Wrapper> 
              <Error/>
            </Wrapper> 
  }

  return (
    <Wrapper>
      {!loading ?
        people.length ?
          <>
            <Header>{query ? `Search results for "${query}" (${totalNumberOfPeople})` : "Popular people"}</Header>
            <PeopleContainer people={people} />
            <Pager />
          </> :
          <>
            <Header>{`Sorry, there are no results for "${query}"`}</Header>
            <NoResults />
          </> :
        <Loader />
      }
    </Wrapper>
  )
};