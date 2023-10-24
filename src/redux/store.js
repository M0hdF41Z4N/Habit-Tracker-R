import { configureStore } from "@reduxjs/toolkit";

// importing all the reducers
import { habitReducer } from "./reducers/habit-reducer";

// creating store
export const store = configureStore({
  reducer: {
    habit: habitReducer,
  },
});