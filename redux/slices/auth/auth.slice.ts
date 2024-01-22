import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/redux/slices/auth/types";

export interface IAuthInitialState {
  loading: boolean;
  isInitializing: boolean;
  error: string | undefined;
  user: User | undefined;
  isAuthenticated: boolean;
}

const initialState: IAuthInitialState = {
  loading: false,
  isInitializing: true,
  error: undefined,
  user: undefined,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authResetError: (state) => {
      state.error = undefined;
    },
    setUser: (state, { payload }) => {
      state.isAuthenticated = true;
      state.user = payload;
    },
    updateUser: (state, { payload }) => {
      const user = { ...state.user };
      Object.assign(user, payload);
      state.user = user;
    },
    setInitializing: (state, { payload }) => {
      state.isInitializing = payload;
    },
    logoutUser: (state) => {
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const authSliceReducer = authSlice.reducer;

export const {
  authResetError,
  logoutUser,
  setInitializing,
  setUser,
  updateUser,
} = authSlice.actions;
