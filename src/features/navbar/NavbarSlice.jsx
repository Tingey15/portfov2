import { animate } from "framer-motion";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
      if (state.isOpen) {
        animate(".fa", { rotate: 90, position: "fixed" });
      } else {
        animate(".fa", { rotate: 0, position: "relative" });
      }
    },
  },
});

export default navbarSlice.reducer;
export const { toggleNav } = navbarSlice.actions;
