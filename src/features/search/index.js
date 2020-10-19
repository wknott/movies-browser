import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import { Label, Icon, Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const Search = () => {
  const searchQueryParamName = "search";
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter(true);
  const location = useLocation();
  const atMovies = location.pathname.includes("movies");

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Label>
      <Icon src={searchIcon} />
      <Input value={query || ""}
        placeholder={`Search for ${atMovies ? "movies" : "people"}...`}
        onChange={onInputChange} />
    </Label>
  );
};

export default Search;
