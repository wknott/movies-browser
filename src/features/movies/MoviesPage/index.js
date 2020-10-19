import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  selectLoading,
  selectMovies,
  selectCurrentMoviesPage,
  fetchMovies,
  selectTotalNumberOfMovies
} from "../moviesSlice";
import Header from "../../../common/Header";
import { Pager } from "../../../common/Pager";
import { useQueryParameter } from "../../search/queryParameters";
import Loader from "../../../common/Loader";
import NoResults from "../../../common/NoResults";
import searchQueryParamName from "../../searchQueryParamName";
import pageQueryParamName from "../../pageQueryParamName";

export default () => {
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const currentPage = useQueryParameter(pageQueryParamName);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, query }));
  }, [dispatch, currentPage, query]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const totalNumberOfMovies = useSelector(selectTotalNumberOfMovies);

  return (
    <Wrapper>
      {!loading ?
        movies.length ?
          <>
            <Header>{query ? `Search results for "${query}" (${totalNumberOfMovies})` : "Popular movies"}</Header>
            <MoviesContainer movies={movies} />
            <Pager></Pager>
          </> :
          <>
            <Header>{`Sorry, there are no results for "${query}"`}</Header>
            <NoResults />
          </> :
        <Loader />
      }
    </Wrapper>
  );
};
