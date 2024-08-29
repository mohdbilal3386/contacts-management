import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./reducers/sidebarReducer";
import { contactSlice } from "./reducers/contactSlice";

const rootReducer = combineSlices(sidebarSlice, contactSlice);

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
