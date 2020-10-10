import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    loading: true,
    people: [],
    person: {},
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
    fetchPerson: (state) => {
      state.loading = true;
    },
    fetchPersonSuccess: (state, { payload: person }) => {
      state.person = person;
      state.loading = false;
    },
    fetchPersonError: (state) => {
      state.loading = false;
    },
  },
});

export const selectPeopleState = state => state.people;
export const selectLoading = state => selectPeopleState(state).loading;
export const selectPeople = state => selectPeopleState(state).people;
export const selectPerson = state => selectPeopleState(state).person;

export const {
  fetchPopularPeople,
  fetchPopularPeopleError,
  fetchPopularPeopleSuccess,
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} = peopleSlice.actions;

export default peopleSlice.reducer;
