import { closeBasketModal } from "@/redux/slices/basket/basket.slice";
import {
  newBasketItemSelector,
  openMasketModalSelector,
} from "@/redux/slices/basket/selectors";
import { AppDispatch } from "@/redux/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

export const useBasketModal = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const openBasketModal = useSelector(openMasketModalSelector);
  const newBasketItem = useSelector(newBasketItemSelector);

  const handleCloseModal = () => {
    dispatch(closeBasketModal());
  };

  const goToBasket = () => {
    router.push("/cart");
    handleCloseModal();
  };

  return {
    openBasketModal,
    newBasketItem,
    handleCloseModal,
    goToBasket,
  };
};
