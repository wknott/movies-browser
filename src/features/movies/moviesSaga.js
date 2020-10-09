import { takeLatest, call, put } from "redux-saga/effects";
import { getGenres, getMoviesByName, getPopularMovies } from "./api";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  fetchMoviesByName,
  fetchMoviesByNameSuccess,
  fetchMoviesByNameError,
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
function* fetchMoviesByNameHandler() {
  try {
    const movie = yield call(getMoviesByName);
    yield put(fetchMoviesByNameSuccess(movie));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchMoviesByNameError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMoviesByName.type, fetchMoviesByNameHandler);
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
