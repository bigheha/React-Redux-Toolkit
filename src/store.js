import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import tasksReducer from "./features/tasks/tasksSlice";
import taskModalReducer from "./features/taskModal/taskModalSlice";
import listModalReducer from "./features/listModal/listModalSlice";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    tasks: tasksReducer,
    taskModal: taskModalReducer,
    listModal: listModalReducer,
  },
});

export default store;
