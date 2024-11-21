import taskReducer from "./feature/task/taskSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
