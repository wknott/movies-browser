import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
  },
  reducers: {
    fetchPopularMovies: (state) => {
      state.loading = true;
      state.movies = [];
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
      state.movies = [];
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectMovies = (state) => selectMoviesState(state).movies;

export const {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
} = moviesSlice.actions;
export default moviesSlice.reducer;
