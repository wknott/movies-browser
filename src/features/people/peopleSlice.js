import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    loading: true,
    people: [],
    person: null,
    currentPage: 1,
    allPages: 1,
  },
  reducers: {
    setPeoplePageToFirst: (state) => {
      state.currentPage = 1;
    },
    setPeoplePageToLast: (state) => {
      state.currentPage = state.allPages;
    },
    incrementPeoplePage: (state) => {
      state.currentPage += 1;
    },
    decrementPeoplePage: (state) => {
      state.currentPage -= 1;
    },
    fetchPeople: (state) => {
      state.loading = true;
      state.people = [];
    },
    fetchPeopleSuccess: (state, { payload }) => {
      state.people = payload.people;
      state.allPages = payload.allPages;
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
export const selectCurrentPeoplePage = state => selectPeopleState(state).currentPage;
export const selectPeopleAllPages = state => selectPeopleState(state).allPages;

export const {
  setPeoplePageToFirst,
  setPeoplePageToLast,
  incrementPeoplePage,
  decrementPeoplePage,
  fetchPeople,
  fetchPeopleError,
  fetchPeopleSuccess,
  fetchPerson,
  fetchPersonError,
  fetchPersonSuccess,
} = peopleSlice.actions;

export default peopleSlice.reducer;
