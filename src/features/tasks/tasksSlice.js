import { createSlice } from "@reduxjs/toolkit";

export const tasklists = [
  {
    name: "first list",
    id: "qwerty",
    tasks: ["task one", "task two", "task three"],
  },
  {
    name: "second list",
    id: "azerty",
    tasks: ["first task", "second task", "third task"],
  },
];

const initialState = {
  selectedList: "qwerty",
  tasklists: [...tasklists],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    select: (state, action) => {
      state.selectedList = action.payload;
    },
    addTask: (state, action) => {
      // const targetList = state.find((list) => list.id === state.selectedList);
      const targetList = state.tasklists.find(
        (list) => list.id === state.selectedList
      );
      targetList.tasks.push(action.payload);
    },
  },
});

export default tasksSlice.reducer;
export const { select, addTask } = tasksSlice.actions;
