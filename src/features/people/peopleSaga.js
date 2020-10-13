import { takeLatest, call, put } from "redux-saga/effects";
import { getPersonDetails, getPopularPeople } from "./api";
import {
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} from "./peopleSlice";

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
    yield put(fetchPersonSuccess(person));
  } catch (error) {
    yield call(alert, error + "Coś poszło nie tak! Spróbuj ponownie później.");
    yield put(fetchPersonError());
  }
};

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
  yield takeLatest(fetchPerson.type, fetchPersonHandler);
};
