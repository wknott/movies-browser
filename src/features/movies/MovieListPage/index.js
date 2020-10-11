import React, { useEffect } from "react";
const { useDispatch } = require("react-redux");
const { fetchMoviesByName } = require("../moviesSlice");

const MovieListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesByName("mulan"));
  }, [dispatch]);

  return <h1>Cześć !</h1>;
};

export default MovieListPage;
