import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  selectLoading,
  selectMovies,
  fetchMovies,
  selectTotalNumberOfMovies,
  selectError,
} from "../moviesSlice";
import Header from "../../../common/Header";
import { Pager } from "../../../common/Pager";
import { useQueryParameter } from "../../search/queryParameters";
import Loader from "../../../common/Loader";
import NoResults from "../../../common/NoResults";
import searchQueryParamName from "../../searchQueryParamName";
import pageQueryParamName from "../../pageQueryParamName";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import {
  noResults,
  popularMovies,
  searchingFor,
  searchResultsFor,
} from "../../../common/languages";

const MoviesPage = () => {
  const query = useQueryParameter(searchQueryParamName);
  const dispatch = useDispatch();
  const currentPage = useQueryParameter(pageQueryParamName);
  const language = useSelector(selectLanguage);
  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const totalNumberOfMovies = useSelector(selectTotalNumberOfMovies);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage, query, language }));
  }, [dispatch, currentPage, query, language]);

  if (error) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {!loading ? (
        movies.length ? (
          <>
            <Header>
              {query
                ? `${searchResultsFor[language]} "${query}" (${totalNumberOfMovies})`
                : popularMovies[language]}
            </Header>
            <MoviesContainer movies={movies} />
            <Pager></Pager>
          </>
        ) : (
          <>
            <Header>
              {noResults[language]} <q>{query}</q>
            </Header>
            <NoResults />
          </>
        )
      ) : (
        <>
          <Header>
            {query
              ? `${searchingFor[language]} "${query}"`
              : popularMovies[language]}
          </Header>
          <Loader />
        </>
      )}
    </Wrapper>
  );
};
export default MoviesPage;
