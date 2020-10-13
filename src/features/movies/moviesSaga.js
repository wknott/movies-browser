import { takeLatest, call, put } from "redux-saga/effects";

import { getGenres, getMovieCredits, getMovieDetails, getMoviesByQuery, getPopularMovies } from "./api";

import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchMovieError,
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
  fetchMovieCredits,
  fetchMovieCreditsError,
  fetchMovieCreditsSuccess,
} from "./moviesSlice";

function* fetchPopularMoviesHandler() {
  try {
    const popularMovies = yield call(getPopularMovies);
    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchPopularMoviesError());
  }
}

function* fetchGenresHandler() {
  try {
    const popularMovies = yield call(getGenres);
    yield put(fetchGenresSuccess(popularMovies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchGenresError());
  }
}

function* fetchMoviesByQueryHandler({ payload: query }) {
  try {
    const movies = yield call(getMoviesByQuery, query);
    yield put(fetchMoviesByQuerySuccess(movies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchMoviesByQueryError());
  }
}

function* fetchMovieHandler({ payload: movieId }) {
  try {
    const movie = yield call(getMovieDetails, movieId);
    yield put(fetchMovieSuccess(movie));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchMovieError());
  }
};

function* fetchMovieCreditsHandler({ payload: movieId }) {
  try {
    const credits = yield call(getMovieCredits, movieId);
    yield put(fetchMovieCreditsSuccess(credits));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchMovieCreditsError());
  }
};

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
  yield takeLatest(fetchMovieCredits.type, fetchMovieCreditsHandler);
};
