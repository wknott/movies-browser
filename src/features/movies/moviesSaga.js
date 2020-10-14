import { takeLatest, call, put } from "redux-saga/effects";

import { getGenres, getMovieDetails, getMoviesByQuery, getPopularMovies } from "./api";

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
} from "./moviesSlice";

function* fetchPopularMoviesHandler({payload: page}) {
  try {
    const popularMovies = yield call(getPopularMovies,page);
    yield put(fetchPopularMoviesSuccess(popularMovies));
  } catch (error) {
    yield put(fetchPopularMoviesError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
}

function* fetchGenresHandler() {
  try {
    const popularMovies = yield call(getGenres);
    yield put(fetchGenresSuccess(popularMovies));
  } catch (error) {
    yield put(fetchGenresError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
}
function* fetchMoviesByQueryHandler({payload: query}) {
  try {
    const movies = yield call(getMoviesByQuery,query);
    yield put(fetchMoviesByQuerySuccess(movies));
  } catch (error) {
    yield put(fetchMoviesByQueryError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
}

function* fetchMovieHandler({ payload: movieId }) {
  try {
    const movie = yield call(getMovieDetails, movieId);
    yield put(fetchMovieSuccess(movie));
  } catch (error) {
    yield put(fetchMovieError());
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
  }
};

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
};
