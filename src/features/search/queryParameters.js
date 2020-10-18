import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(searchQueryParamName);
}

export const useReplaceQueryParameter = (restartQueries = false) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  return ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }
    if(restartQueries && searchParams.get(key))
    {
        history.push(`${location.pathname}?${key}=${searchParams.get(key).toString()}`)
    }
    else{
      searchParams ? history.push(`${location.pathname}?${searchParams.toString()}`) : history.push(`${location.pathname}`);
    }
  }
}