import { takeLatest, call, put } from "redux-saga/effects";
import { getGenres, getMoviesByQuery, getPopularMovies } from "./api";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
  fetchGenres,
  fetchGenresError,
  fetchGenresSuccess,
  fetchMoviesByQuery,
  fetchMoviesByQuerySuccess,
  fetchMoviesByQueryError,
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
function* fetchMoviesByQueryHandler({payload : query}) {
  try {
    const movies = yield call(getMoviesByQuery,query);
    yield put(fetchMoviesByQuerySuccess(movies));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchMoviesByQueryError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMoviesByQuery.type, fetchMoviesByQueryHandler);
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
