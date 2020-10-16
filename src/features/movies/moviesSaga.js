import { takeLatest, call, put } from "redux-saga/effects";

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
    const genres = yield call(getGenres);
    const movies = yield data.results.map(movie => {
      const genresNames = movie.genre_ids.map(genre => getGenreName(genre, genres));
      return { ...movie, genres: genresNames }
    });
    yield put(fetchMoviesSuccess({ movies, totalPages: data.total_pages }));
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
