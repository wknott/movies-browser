import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";

export default function* rootSaga() {
  yield all([watchFetchPopularMovies()]);
}
