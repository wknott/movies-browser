import React, { useEffect, useState } from "react";
import searchIcon from "../../images/searchIcon.svg";
import { Label, Icon, Input } from "./styled";
import { useQueryParameter } from "./queryParameters";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLanguage } from "../../common/Navigation/LanguageSelect/languageSlice";
import { searchFor, movies, people } from "../../common/languages";
import { useOnInputSearchChange } from "./useOnInputSearchChange";

const Search = ({ mobile }) => {
  const location = useLocation();
  const searchQueryParamName = "search";
  const query = useQueryParameter(searchQueryParamName) || "";
  const [inputValue, setInputValue] = useState(query);
  const atMovies = location.pathname.includes("movies");
  const language = useSelector(selectLanguage);

  useEffect(() => {
    setInputValue(query);
  }, [query]);

  const onInputChange = useOnInputSearchChange(setInputValue);

  return (
    <Label mobile={mobile}>
      <Icon src={searchIcon} />
      <Input
        value={inputValue}
        placeholder={`${searchFor[language]} ${atMovies ? movies[language] : people[language]}…`}
        onChange={({ target: { value } }) => onInputChange({ newValue: value, atMovies })}
      />
    </Label>
  );
};

export default Search;
