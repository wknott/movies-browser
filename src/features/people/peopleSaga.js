import { takeLatest, call, put } from "redux-saga/effects";
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
    const people = yield call(getPeople, payload);
    yield put(fetchPeopleSuccess(
      {
        people: people.results,
        allPages: people.total_pages,
        totalResults: people.total_results,
      }
    ));
  } catch (error) {
    yield put(fetchPeopleError());
  }
};

function* fetchPersonHandler({ payload }) {
  try {
    const person = yield call(getPersonDetails, payload);
    const credits = yield call(getPersonMovieCredits, payload);
    const genres = yield call(getGenres, { language: payload.language });
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
    yield put(fetchPersonError());
  }
};

export function* watchFetchPeople() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
};
