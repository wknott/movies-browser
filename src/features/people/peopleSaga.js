import { takeLatest, call, put, debounce } from "redux-saga/effects";
import { getPersonDetails, getPersonMovieCredits, getPeople } from "./api";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
} from "./peopleSlice";
import { getGenres } from "../movies/api";
import { getGenreName } from "../movies/getGenreName";

function* fetchPeopleHandler({ payload }) {
  try {
    const people = yield call(getPeople,{ page: payload.page, query: payload.query});
    yield put(fetchPeopleSuccess(people));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchPeopleError());
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

export function* watchFetchPeople() {
  yield debounce(500, fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
};
