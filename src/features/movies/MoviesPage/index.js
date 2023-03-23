import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
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
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMovies } from "../api";

const MoviesPage = () => {
  const query = useQueryParameter(searchQueryParamName);
  const currentPage = useQueryParameter(pageQueryParamName);
  const language = useSelector(selectLanguage);

  const { data, isLoading, isError } = useQuery(
    ["movies", { page: +currentPage, query, language }],
    getMovies
  );

  const {
    results: movies,
    total_results: totalNumberOfMovies,
    total_pages: totalPages,
  } = data || {};

  const queryClient = useQueryClient();

  useEffect(() => {
    if (+currentPage + 1 < totalPages)
      queryClient.prefetchQuery(
        ["movies", { page: +currentPage + 1, query, language }],
        getMovies
      );
  }, [currentPage, query, language, queryClient, totalPages]);

  if (isError) {
    return (
      <Wrapper>
        <Error />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {!isLoading ? (
        movies.length ? (
          <>
            <Header>
              {query
                ? `${searchResultsFor[language]} "${query}" (${totalNumberOfMovies})`
                : popularMovies[language]}
            </Header>
            <MoviesContainer movies={movies} />
            <Pager allPages={totalPages} />
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
