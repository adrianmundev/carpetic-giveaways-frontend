import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { BasketItem, IBasketState } from "@/redux/slices/basket/basket.slice";

export const basketItemsSelector = createSelector<
  [(state: RootState) => IBasketState],
  BasketItem[]
>(
  (state) => state.basket,
  (values) => values.items,
);
