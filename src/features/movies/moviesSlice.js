import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    movie: {},
    searchQuery: "",
    currentPage:1,
    allPages:1,
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
    fetchPopularMovies: (state) => {
      state.loading = true;
      state.movies = [];
    },
    fetchPopularMoviesSuccess: (state, { payload: movies }) => {
      state.movies = movies.results;
      state.allPages = movies.total_pages;
      state.loading = false;
    },
    fetchPopularMoviesError: (state) => {
      state.loading = false;
      state.movies = [];
    },
    fetchGenres: (state) => {
      state.loading = true;
    },
    fetchGenresSuccess: (state, { payload: genres }) => {
      state.genres = genres;
      state.loading = true;
    },
    fetchGenresError: (state) => {
      state.loading = false;
    },
    fetchMovie: (state) => {
      state.loading = true;
    },
    fetchMovieSuccess: (state, { payload: movie }) => {
      state.movie = movie;
      state.loading = false;
    },
    fetchMovieError: (state) => {
      state.loading = false;
    },
    fetchMoviesByQuery: (state, { payload: query }) => {
      state.searchQuery = query;
      state.loading = true;
    },
    fetchMoviesByQuerySuccess: (state, { payload: movies }) => {
      state.movies = movies;
      state.allPages = movies.total_pages;
      state.loading = false;
    },
    fetchMoviesByQueryError: (state) => {
      state.loading = false;
    },
  },
});

export const selectMoviesState = (state) => state.movies;
export const selectLoading = (state) => selectMoviesState(state).loading;
export const selectMovies = (state) => selectMoviesState(state).movies;
export const selectMovie = (state) => selectMoviesState(state).movie;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectSearchQuery = (state) => selectMoviesState(state).searchQuery;
export const selectCurrentPage = (state) => selectMoviesState(state).currentPage;
export const selectAllPages = (state) => selectMoviesState(state).allPages;

export const {
  setPageToFirst,
  setPageToLast,
  incrementPage,
  decrementPage,
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  fetchMovie,
  fetchMovieError,
  fetchMovieSuccess,
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
} = moviesSlice.actions;
export default moviesSlice.reducer;
