import { createSlice } from "@reduxjs/toolkit";

interface sidebarProps {
  isOpen: boolean;
}
const initialState: sidebarProps = {
  isOpen: true,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
