import { takeLatest, call, put } from "redux-saga/effects";
import { getPersonDetails, getPersonMovieCredits, getPopularPeople } from "./api";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./peopleSlice";
import { getGenres } from "../movies/api";
import { getGenreName } from "../movies/getGenreName";

function* fetchPopularPeopleHandler() {
  try {
    const popularPeople = yield call(getPopularPeople);
    yield put(fetchPopularPeopleSuccess(popularPeople));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchPopularPeopleError());
  }
};

function* fetchPersonHandler({ payload: personId }) {
  try {
    const person = yield call(getPersonDetails, personId);
    const credits = yield call(getPersonMovieCredits, personId);
    const genres = yield call(getGenres);
    const crew = yield credits.crew.map(movie => {
      const genresNames = movie.genre_ids.map(genre => getGenreName(genre, genres));
      return { ...movie, genres: genresNames }
    });
    const cast = yield credits.cast.map(movie => {
      const genresNames = movie.genre_ids.map(genre => getGenreName(genre, genres));
      return { ...movie, genres: genresNames }
    });
    yield put(fetchPersonSuccess({ ...person, cast, crew }));
  } catch (error) {
    yield call(alert, error + "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchPersonError());
  }
};

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
};
