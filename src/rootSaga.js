import { all } from "redux-saga/effects";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";
import { watchFetchPopularPeople } from "./features/people/peopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPopularPeople(),
  ]);
}