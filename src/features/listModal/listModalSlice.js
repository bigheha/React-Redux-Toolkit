import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listModalOpen: false,
};

const listModalSlice = createSlice({
  name: "listModal",
  initialState,
  reducers: {
    openListModal: (state) => {
      state.listModalOpen = true;
    },
    closeListModal: (state) => {
      state.listModalOpen = false;
    },
  },
});

export default listModalSlice.reducer;
export const { openListModal, closeListModal } = listModalSlice.actions;
