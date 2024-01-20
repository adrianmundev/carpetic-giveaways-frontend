import { Action, combineReducers, Reducer } from "@reduxjs/toolkit";
import { authSliceReducer } from "@/redux/slices/auth/auth.slice";
import { RootState } from "@/redux/store";

export const reducer = combineReducers({
  auth: authSliceReducer,
});
