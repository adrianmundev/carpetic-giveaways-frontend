import { IAuthInitialState } from "@/redux/slices/auth/auth.slice";
import { RootState } from "@/redux/store";
import { createSelector } from "reselect";

export const isInitializingSelector = createSelector<
  [(state: RootState) => IAuthInitialState],
  boolean
>(
  (state) => state.auth,
  (values) => values.isInitializing,
);
