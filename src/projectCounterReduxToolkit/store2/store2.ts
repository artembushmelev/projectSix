import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterSlice";

export const store2 = configureStore({
  reducer: {
    count: countReducer,
  },
});

export type RootState = ReturnType<typeof store2.getState>;
