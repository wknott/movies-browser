import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenres, selectGenres } from "../moviesSlice";

export default () => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return (
    <h1>Popular Movies</h1>
  );
};
