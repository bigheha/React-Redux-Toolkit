import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import tasksReducer from "./features/tasks/tasksSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tasks: tasksReducer,
  },
});

export default store;
