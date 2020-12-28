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

function* fetchPeopleHandler({ payload }) {
  try {
    const people = yield call(getPeople, payload);
    yield put(
      fetchPeopleSuccess({
        people: people.results,
        allPages: people.total_pages,
        totalResults: people.total_results,
      })
    );
  } catch (error) {
    yield put(fetchPeopleError());
  }
}

function* fetchPersonHandler({ payload }) {
  try {
    const person = yield call(getPersonDetails, payload);
    const credits = yield call(getPersonMovieCredits, payload);
    const crew = yield credits.crew;
    const cast = yield credits.cast;
    yield put(fetchPersonSuccess({ ...person, cast, crew }));
  } catch (error) {
    yield put(fetchPersonError());
  }
}

export function* watchFetchPeople() {
  yield takeLatest(fetchPeople.type, fetchPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
}
