import { all } from "redux-saga/effects";
import { watchFetchGenres } from "./features/genres/genresSaga";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";
import { watchFetchPeople } from "./features/people/peopleSaga";

export default function* rootSaga() {
  yield all([
    watchFetchPopularMovies(),
    watchFetchPeople(),
    watchFetchGenres(),
  ]);
}
