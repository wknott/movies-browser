import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  fetchPopularMovies,
  selectLoading,
  selectMovies,
  fetchGenres,
  selectCurrentPage
} from "../moviesSlice";
import Header from "../../../common/Header";
import { Pager } from "../../../Pager";

export default () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPopularMovies(currentPage));
  }, [dispatch, currentPage]);

  const loading = useSelector(selectLoading);
  const movies = useSelector(selectMovies);


  if (!loading && movies) {
    return (
      <div className="App">
        <Wrapper>
          <Header>Popular movies</Header>
          <MoviesContainer movies={movies} />
          <Pager></Pager>
        </Wrapper>
      </div>
    );
  } else {
    return <div className="App">Trwa ładowanie...</div>;
  }
};
