import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkThemeEnabled: false,
  },
  reducers: {
    toggleTheme: state => {
      state.isDarkThemeEnabled = !state.isDarkThemeEnabled;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.theme;
export const selectIsDark = (state) => selectThemeState(state).isDarkThemeEnabled;

export default themeSlice.reducer;
