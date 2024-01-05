import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";
import toDoListReducer from "./reducers/toDoListReducer";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: toDoListReducer,
  },
});
