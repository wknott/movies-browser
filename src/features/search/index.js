import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import { Label, Icon, Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../common/Navigation/LanguageSelect/languageSlice";
import { searchFor, movies, people } from "../../languages";

const Search = () => {
  const searchQueryParamName = "search";
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const atMovies = location.pathname.includes("movies");
  const language = useSelector(selectLanguage);

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Label>
      <Icon src={searchIcon} />
      <Input
        value={query || ""}
        placeholder={`${searchFor[language]} ${atMovies ? movies[language] : people[language]}...`}
        onChange={onInputChange}
      />
    </Label>
  );
};

export default Search;
