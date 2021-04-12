import { configureStore } from "@reduxjs/toolkit";
import groupReducer from "../groupsSlice";

const store = configureStore({
  reducer: {group: groupReducer},
});

export default store;
