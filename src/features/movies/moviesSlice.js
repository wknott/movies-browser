import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    movie: null,
    searchQuery: "",
    currentPage: 1,
    allPages: 1,
  },
  reducers: {
    setPageToFirst: (state) => {
      state.currentPage = 1;
    },
    setPageToLast: (state) => {
      state.currentPage = state.allPages;
    },
    incrementPage: (state) => {
      state.currentPage += 1;
    },
    decrementPage: (state) => {
      state.currentPage -= 1;
    },
    fetchMovies: (state) => {
      state.loading = true;
      state.movies = [];
    },
    fetchMoviesSuccess: (state, { payload }) => {
      state.movies = payload.movies;
      state.allPages = payload.totalPages;
      state.loading = false;
    },
    fetchMovie: (state) => {
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
      state.loading = false;
    },
    fetchError: (state) => {
      state.loading = false;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectSearchQuery = (state) => selectMoviesState(state).searchQuery;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;
export const selectAllPages = (state) => selectMoviesState(state).allPages;

export const {
  setPageToFirst,
  setPageToLast,
  incrementPage,
  decrementPage,
  fetchMovies,
  fetchMoviesSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
