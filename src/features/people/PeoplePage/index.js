import React from "react";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useSelector } from "react-redux";
import PeopleContainer from "../PeopleContainer";
import Loader from "../../../common/Loader";
import { useQueryParameter } from "../../search/queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import { Pager } from "../../../common/Pager";
import NoResults from "../../../common/NoResults";
import pageQueryParamName from "../../pageQueryParamName";
import Error from "../../../common/Error/index";
import { selectLanguage } from "../../../common/Navigation/LanguageSelect/languageSlice";
import {
  noResults,
  popularPeople,
  searchResultsFor,
} from "../../../common/languages";
import { useQuery } from "react-query";
import { getPeople } from "../api";

const PeoplePage = () => {
  const query = useQueryParameter(searchQueryParamName);
  const currentPage = useQueryParameter(pageQueryParamName);
  const language = useSelector(selectLanguage);

  const { data, isLoading, isError } = useQuery(
    ["people", { page: currentPage, query, language }],
    getPeople
  );

  const {
    results: people,
    total_results: totalResults,
    total_pages: totalPages,
  } = data || {};

  return (
    <Wrapper>
      {isError ? (
        <Error />
      ) : isLoading ? (
        <Loader />
      ) : people.length ? (
        <>
          <Header>
            {query
              ? `${searchResultsFor[language]} "${query}" (${totalResults})`
              : popularPeople[language]}
          </Header>
          <PeopleContainer people={people} />
          <Pager allPages={totalPages} />
        </>
      ) : (
        <>
          <Header>
            {noResults[language]} <q>{query}</q>
          </Header>
          <NoResults />
        </>
      )}
    </Wrapper>
  );
};

export default PeoplePage;
