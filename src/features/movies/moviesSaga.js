import { takeLatest, call, put } from "redux-saga/effects";

import { getGenres, getMovieCredits, getMovieDetails, getMovies } from "./api";

import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchError,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload }) {
  try {
    const movies = yield call(getMovies, payload);
    const genres = yield call(getGenres);
    yield put(fetchMoviesSuccess({ movies, genres }));
  } catch (error) {
    yield put(fetchError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
}

function* fetchMovieHandler({ payload: movieId }) {
  try {
    const movie = yield call(getMovieDetails, movieId);
    const credits = yield call(getMovieCredits, movieId);
    yield put(fetchMovieSuccess({ ...movie, credits }));
  } catch (error) {
    yield put(fetchError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
};

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
};
