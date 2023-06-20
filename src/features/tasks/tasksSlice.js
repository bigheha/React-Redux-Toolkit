import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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
    addList: (state, action) => {
      const newList = {
        name: action.payload,
        id: uuidv4(),
        tasks: [],
      };
      state.tasklists.push(newList);
    },
    deleteList: (state, action) => {
      state.tasklists = state.tasklists.filter(
        (list) => list.name != action.payload
      );
    },
    addTask: (state, action) => {
      const targetList = state.tasklists.find(
        (list) => list.id === state.selectedList
      );
      targetList.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      const targetList = state.tasklists.find(
        (list) => list.id === state.selectedList
      );
      targetList.tasks = targetList.tasks.filter((task) => {
        return task !== action.payload;
      });
    },
  },
});

export default tasksSlice.reducer;
export const { select, addTask, removeTask, addList, deleteList } =
  tasksSlice.actions;
