import React from "react";
import Wrapper from "./common/Wrapper/index";
import MovieTile from "./features/movies/MovieTile/index";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <MovieTile></MovieTile>
      </Wrapper>
    </div>
  );
}

export default App;
