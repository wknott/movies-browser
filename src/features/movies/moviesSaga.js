import { takeLatest, call, put, debounce } from "redux-saga/effects";
import { getGenres, getMovieCredits, getMovieDetails, getMovies } from "./api";
import { getGenreName } from "./getGenreName";

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
    const genres = yield call(getGenres, { language: payload.language });
    const movies = yield data.results.map(movie => {
      const genresNames = movie.genre_ids.map(genre => getGenreName(genre, genres));
      return { ...movie, genres: genresNames }
    });
    yield put(fetchMoviesSuccess(
      {
        movies,
        totalPages: data.total_pages,
        totalResults: data.total_results,
      }
    ));
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
};

export function* watchFetchPopularMovies() {
  yield debounce(500, fetchMovies.type, fetchMoviesHandler);
  yield takeLatest(fetchMovie.type, fetchMovieHandler);
};
