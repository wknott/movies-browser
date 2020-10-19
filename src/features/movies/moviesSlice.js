import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    movie: null,
    allPages: 1,
    totalNumberOfMovies: 0,
  },
  reducers: {
    fetchMovies: (state) => {
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
export const selectCurrentMoviesPage = (state) => selectMoviesState(state).currentPage;
export const selectAllMoviesPages = (state) => selectMoviesState(state).allPages;
export const selectTotalNumberOfMovies = (state) => selectMoviesState(state).totalNumberOfMovies;

export const {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
