import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import { Label, Icon, Input } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameters";
import { useLocation } from "react-router-dom";

const Search = () => {
  const searchQueryParamName = "search";
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  const location = useLocation();
  console.log(location.pathname.slice(1, 6));
  return (
    <Label>
      <Icon src={searchIcon} />
      <Input value={query || ""}
        placeholder={`Search for ${location.pathname.includes("movies") ? "movies" : "people"}...`}
        onChange={onInputChange} />
    </Label>
  );
};

export default Search;
