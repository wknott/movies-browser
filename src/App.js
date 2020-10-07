import React from "react";
import Wrapper from "./common/Wrapper/index";
import MovieTile from "./features/movies/MovieTile/index";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "./features/movies/moviesSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchPopularMovies());
  return (
    <div className="App">
      <Wrapper>
        <MovieTile></MovieTile>
      </Wrapper>
    </div>
  );


export default App;
