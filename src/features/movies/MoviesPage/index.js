import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  selectLoading,
  selectMovies,
  selectCurrentPage,
  fetchMovies
} from "../moviesSlice";
import Header from "../../../common/Header";
import { Pager } from "../../../common/Pager";
import { useQueryParameter } from "../../search/queryParameters";

export default () => {
  const searchQueryParamName = "search";
  const query = useQueryParameter(searchQueryParamName);

  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, query }));
  }, [dispatch, currentPage, query]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);


  if (!loading && movies) {
    return (
      <div className="App">
        <Wrapper>
          <Header>Popular movies</Header>
          <MoviesContainer movies={movies} />
          <Pager></Pager>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};
