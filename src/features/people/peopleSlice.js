import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    loading: true,
    people: [],
    person: null,
  },
  reducers: {
    fetchPeople: (state) => {
      state.loading = true;
      state.people = [];
    },
    fetchPeopleSuccess: (state, { payload: people }) => {
      state.people = people;
      state.loading = false;
    },
    fetchPeopleError: (state) => {
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
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} = peopleSlice.actions;

export default peopleSlice.reducer;
