import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularMovies } from "./api";
import {
  fetchPopularMovies,
  fetchPopularMoviesError,
  fetchPopularMoviesSuccess,
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

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchPopularMovies.type, fetchPopularMoviesHandler);
}
