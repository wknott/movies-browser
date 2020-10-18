import { useHistory, useLocation } from "react-router-dom";

export const useQueryParameter = (searchQueryParamName) => {
  const location = useLocation();
  return (new URLSearchParams(location.search)).get(searchQueryParamName);
}

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const history = useHistory();

  return ({ key, value }, restartQueries) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(key);
    }

    if(restartQueries)
    {
      history.push(`${location.pathname}?${key}=${searchParams.get(key).toString()}`)
    }
    else{
      history.push(`${location.pathname}?${searchParams.toString()}`)
    }
  }
}