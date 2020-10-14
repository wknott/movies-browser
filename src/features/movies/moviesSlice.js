import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    loading: true,
    movies: [],
    genres: [],
    movie: {},
    movieCast: [],
    movieCrew: [],
    searchQuery: "",
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
      state.loading = false;
    },
    fetchMoviesByQueryError: (state) => {
      state.loading = false;
    },
    fetchMovieCredits: (state) => {
      state.loading = true;
    },
    fetchMovieCreditsSuccess: (state, { payload: credits }) => {
      state.movieCast = credits.cast;
      state.movieCrew = credits.crew;
      state.loading = false;
    },
    fetchMovieCreditsError: (state) => {
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
export const selectMovieCast = (state) => selectMoviesState(state).movieCast;
export const selectMovieCrew = (state) => selectMoviesState(state).movieCrew;

export const {
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
  fetchMovieCredits,
  fetchMovieCreditsError,
  fetchMovieCreditsSuccess,
} = moviesSlice.actions;
export default moviesSlice.reducer;
