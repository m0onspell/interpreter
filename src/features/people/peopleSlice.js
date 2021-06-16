import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = [];

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    incrementScore: (state, action) =>
      state.map(({ reference, score }) => {
        const newItem = {
          reference,
          score,
        };
        if (reference === action.payload) {
          newItem.score++;
        }
        return newItem;
      }),
  },
});

export const { incrementScore } = peopleSlice.actions;

export const selectPerson = personReference => state =>
  state.people.find(({ reference }) => reference === personReference);

export const selectPersonAge = personReference =>
  createSelector(
    selectPerson(personReference),
    person => person.score, // Assuming that score and age are the same thing
  );

export const peopleReducer = peopleSlice.reducer;
