import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(searchQueryParamName);
}

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  return ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  }
}