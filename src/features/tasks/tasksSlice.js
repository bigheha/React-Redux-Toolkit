import { createSlice } from "@reduxjs/toolkit";
import { tasklists } from "../../taskLists.js";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasklists,
  reducers: {
    addList: (state, newList) => {
      state.push({ name: newList, tasks: [] });
    },
  },
});

export default tasksSlice.reducer;
export const { addList } = tasksSlice.actions;
