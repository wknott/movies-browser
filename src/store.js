import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchFetchPopularMovies } from "./features/movies/moviesSaga";
import moviesReducer from "./features/movies/moviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchFetchPopularMovies);

export default store;
