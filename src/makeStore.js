import { configureStore } from '@reduxjs/toolkit';
import { peopleReducer } from './features/people';

export default function makeStore(preloadedState) {
  return configureStore({
    reducer: {
      people: peopleReducer,
    },
    preloadedState: {
      people: preloadedState,
    },
  });
}
