import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    movie: null,
    allPages: 1,
    totalNumberOfMovies: 0,
    error:false,
  },
  reducers: {
    fetchMovies: (state) => {
      state.error = false;
      state.loading = true;
      state.movies = [];
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.movies = payload.movies;
      state.allPages = payload.totalPages;
      state.totalNumberOfMovies = payload.totalResults;
      state.loading = false;
    },
    fetchMovie: (state) => {
      state.error = false;
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
      state.loading = false;
    },
    fetchError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectAllMoviesPages = (state) => selectMoviesState(state).allPages;
export const selectTotalNumberOfMovies = (state) => selectMoviesState(state).totalNumberOfMovies;
export const selectError = (state) => selectMoviesState(state).error;

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
