import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
};

const taskModalSLice = createSlice({
  name: "taskModal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
});

export default taskModalSLice.reducer;
export const { openModal, closeModal } = taskModalSLice.actions;
