import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en-US",
  },
  reducers: {
    setLanguage: (state, { payload: language }) => {
      state.language = language;
    },
  },
});

const selectLanguageState = state => state.language;
export const selectLanguage = state => selectLanguageState(state).language;

export const { setLanguage } = languageSlice.actions;


export default languageSlice.reducer;