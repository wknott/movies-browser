import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import moviesReducer from "./features/movies/moviesSlice";
import peopleReducer from "./features/people/peopleSlice";
import genresReducer from "./features/genres/genresSlice";
import themeReducer from "./themeSlice";
import languageReducer from "./common/Navigation/LanguageSelect/languageSlice";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    people: peopleReducer,
    theme: themeReducer,
    language: languageReducer,
    genres: genresReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
