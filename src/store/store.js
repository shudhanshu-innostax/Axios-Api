import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../slices/apislice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
