import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { IBasketState } from "@/redux/slices/basket/basket.slice";

export const totalPriceSelector = createSelector<
  [(state: RootState) => IBasketState],
  number
>(
  (state) => state.basket,
  (values) => values.totalPrice,
);
