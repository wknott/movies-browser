import { takeLatest, call, put } from "redux-saga/effects";
import { getMovieCredits, getMovieDetails, getMovies } from "./api";

import {
  fetchMovies,
  fetchMoviesSuccess,
  fetchMovie,
  fetchMovieSuccess,
  fetchError,
} from "./moviesSlice";

function* fetchMoviesHandler({ payload }) {
  try {
    const data = yield call(getMovies, payload);
    const movies = yield data.results;
    yield put(
      fetchMoviesSuccess({
        movies,
        totalPages: data.total_pages,
        totalResults: data.total_results,
      })
    );
  } catch (error) {
    yield put(fetchError());
  }
}

function* fetchMovieHandler({ payload }) {
  try {
    const movie = yield call(getMovieDetails, payload);
    const credits = yield call(getMovieCredits, payload);
    yield put(fetchMovieSuccess({ ...movie, credits }));
  } catch (error) {
    yield put(fetchError());
  }
}

export function* watchFetchPopularMovies() {
  yield takeLatest(fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
}
