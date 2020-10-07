import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: false,
    movies: [],
  },
  getPopularMovies: () => {},
  getPopularMoviesSuccess: () => {},
  getPopularMoviesError: () => {},
});

const selectMoviesState = (state) => state.movies;
const selectMovies = (state) => selectMoviesState(state).movies;

export { selectMovies };
export default movieSlice.reducer;
