import { takeLatest, call, put } from "redux-saga/effects";
import { getGenres } from "../movies/api";

import { fetchGenres, fetchGenresSuccess } from "./genresSlice";

function* fetchGenresHandler(payload) {
  try {
    const genres = yield call(getGenres, { language: payload.language });
    yield put(fetchGenresSuccess({ genres }));
  } catch (error) {
    yield put(console.log, error);
  }
}

export function* watchFetchGenres() {
  yield takeLatest(fetchGenres.type, fetchGenresHandler);
}
