import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { IBasketState } from "@/redux/slices/basket/basket.slice";

export const openMasketModalSelector = createSelector<
  [(state: RootState) => IBasketState],
  boolean
>(
  (state) => state.basket,
  (values) => values.openBasketModal,
);
