import React, { useEffect } from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useDispatch, useSelector } from "react-redux";
import { fetchPeople, selectLoading, selectPeople } from "../peopleSlice";
import PeopleContainer from "../PeopleContainer";
import Loader from "../../../common/Loader";
import { useQueryParameter } from "../../search/queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { Pager } from "../../../common/Pager";
import { selectCurrentPage } from "../../movies/moviesSlice";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const people = useSelector(selectPeople);
  const loading = useSelector(selectLoading);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchPeople({ page: currentPage, query }))
  }, [dispatch, currentPage, query]);

  return (
    !loading
      ?
      <Wrapper>
        <Header>{query ? `Search results for "${query}"` : "Popular people"}</Header>
        <PeopleContainer people={people} />
        <Pager/>
      </Wrapper>
      :
      <Wrapper>
        <Loader></Loader>
      </Wrapper>
  )
};