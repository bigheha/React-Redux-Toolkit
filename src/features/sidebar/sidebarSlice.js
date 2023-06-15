import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: window.innerWidth > 600,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export default sidebarSlice.reducer;
export const { open, close } = sidebarSlice.actions;
