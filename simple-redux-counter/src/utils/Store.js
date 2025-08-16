import { configureStore } from "@reduxjs/toolkit";
import CounterS from "./CounterSlice.js";
export const store = configureStore({
  reducer: {
    counter: CounterS,
  },
});
