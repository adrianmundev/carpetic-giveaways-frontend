import { IAuthInitialState } from "@/redux/slices/auth/auth.slice";
import { RootState } from "@/redux/store";
import { createSelector } from "reselect";

export const isAuthenticatedSelector = createSelector<
  [(state: RootState) => IAuthInitialState],
  boolean
>(
  (state) => state.auth,
  (values) => values.isAuthenticated,
);
