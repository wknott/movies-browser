import React from "react";
import { useDispatch } from "react-redux";
import { fetchPopularMovies } from "./features/movies/moviesSlice";

function App() {
  const dispatch = useDispatch();
  dispatch(fetchPopularMovies());

  return <div className="App"></div>;
}

export default App;
