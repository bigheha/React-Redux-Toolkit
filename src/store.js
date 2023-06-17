import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import tasksReducer from "./features/tasks/tasksSlice";
import modalReducer from "./features/modal/modalSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tasks: tasksReducer,
    modal: modalReducer,
  },
});

export default store;
