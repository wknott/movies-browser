import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    loading: true,
    people: [],
  },
  reducers: {
    fetchPopularPeople: (state) => {
      state.loading = true;
      state.people = [];
    },
    fetchPopularPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.loading = false;
    },
    fetchPopularPeopleError: (state) => {
      state.loading = false;
      state.people = [];
    },
  },
});

export const selectPeopleState = (state) => state.people;
export const selectLoading = (state) => selectPeopleState(state).loading;
export const selectPeople = (state) => selectPeopleState(state).people;

export const {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
} = peopleSlice.actions;
export default peopleSlice.reducer;
