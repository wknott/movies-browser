import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: null,
    loading: false,
    error: false,
  },
  reducers: {
    fetchGenres: (state) => {
      state.error = false;
      state.loading = true;
      state.genres = null;
    },
    fetchGenresSuccess: (state, { payload }) => {
      state.genres = payload.genres;
      state.loading = false;
    },
  },
});

export const { fetchGenres, fetchGenresSuccess } = genresSlice.actions;

export const selectGenresState = (state) => state.genres;
export const selectGenres = (state) => selectGenresState(state).genres;

export default genresSlice.reducer;
