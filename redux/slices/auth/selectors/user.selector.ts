import { IAuthInitialState } from "@/redux/slices/auth/auth.slice";
import { User } from "@/redux/slices/auth/types";
import { RootState } from "@/redux/store";
import { createSelector } from "reselect";

export const userSelector = createSelector<
  [(state: RootState) => IAuthInitialState],
  User
>(
  (state) => state.auth,
  (values) => values.user,
);
