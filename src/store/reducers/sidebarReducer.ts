import { createSlice } from "@reduxjs/toolkit";
import { SidebarState } from "../../types/sidebarTypes";

const initialState: SidebarState = {
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
