import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoviesContainer } from "../MoviesContainer";
import Wrapper from "../../../common/Wrapper/index";
import {
  selectLoading,
  selectMovies,
  selectGenres,
  selectCurrentPage,
  fetchMovies
} from "../moviesSlice";
import Header from "../../../common/Header";
import { getGenreName } from "../getGenreName";
import { Pager } from "../../../common/Pager";

export default () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(fetchMovies({ page: currentPage }));
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
