import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./reducers/sidebarReducer";
const rootReducer = combineSlices(sidebarSlice);

const store = configureStore({
  reducer: rootReducer,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
