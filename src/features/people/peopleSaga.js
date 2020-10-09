import { takeLatest, call, put } from "redux-saga/effects";
import { getPopularPeople } from "./api";
import {
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

export function* watchFetchPopularPeople() {
  yield takeLatest(fetchPopularPeople.type, fetchPopularPeopleHandler);
};
