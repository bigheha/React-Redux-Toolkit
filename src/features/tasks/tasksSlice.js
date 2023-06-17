import { createSlice } from "@reduxjs/toolkit";
import { tasklists } from "../../taskLists.js";

const initialState = {
  selectedList: "qwerty",
  lists: tasklists,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    select: (state, action) => {
      state.selectedList = action.payload;
    },
  },
});

export default tasksSlice.reducer;
export const { select } = tasksSlice.actions;
