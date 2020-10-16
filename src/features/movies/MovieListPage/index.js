import React, { useEffect } from "react";
import Header from "../../../common/Header";
import Wrapper from "../../../common/Wrapper";
import { Pager } from "../../../common/Pager";
import { MoviesContainer } from "../MoviesContainer";
const { useDispatch, useSelector } = require("react-redux");
const { selectMovies, selectLoading, selectSearchQuery, selectCurrentPage, fetchMovies } = require("../moviesSlice");

const MovieListPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchMovies({ query: "frozen", page: currentPage }));
  }, [dispatch, currentPage]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);
  const searchQuery = useSelector(selectSearchQuery);

  if (!loading && movies.length) {
    return (
      <div className="App">
        <Wrapper>
          <Header>Search results for "{searchQuery.query}"</Header>
          <MoviesContainer movies={movies} />
          <Pager></Pager>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};

export default MovieListPage;
