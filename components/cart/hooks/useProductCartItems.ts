import {
  clearBasket,
  removeBasketItem,
} from "@/redux/slices/basket/basket.slice";
import {
  basketItemsSelector,
  totalQuantitySelector,
} from "@/redux/slices/basket/selectors";
import { totalPriceSelector } from "@/redux/slices/basket/selectors/totalPrice.selector";
import { AppDispatch } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export const useProductCartItems = () => {
  const dispatch = useDispatch<AppDispatch>();
  const basketItems = useSelector(basketItemsSelector);
  const totalPrice = useSelector(totalPriceSelector);
  const totalQuantity = useSelector(totalQuantitySelector);

  const handleRemoveItem = (productId: string) => {
    dispatch(removeBasketItem(productId));
  };

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };

  return {
    totalPrice,
    totalQuantity,
    basketItems,
    handleClearBasket,
    handleRemoveItem,
  };
};
