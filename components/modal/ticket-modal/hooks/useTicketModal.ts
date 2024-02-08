import {
  productIdSelector,
  quantitySelector,
  questionAnswerIdSelector,
  ticketOpenModalSelector,
} from "@/redux/slices/ticket/selectors";
import {
  closeModalTicketModal,
  setQuantity,
  setQuestionAnswer,
} from "@/redux/slices/ticket/ticket.slice";
import { AppDispatch } from "@/redux/store";
import { ticketService } from "@/shared/services";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSWR from "swr";
import dayjs from "dayjs";
import { productService } from "@/shared/services/product.service";
import { setBasketItem } from "@/redux/slices/basket/basket.slice";

export const useTicketModal = () => {
  const [quantityInput, setQuantityInput] = useState("1");
  const [countDown, setCountDown] = useState<any>({
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
  });
  const openTickeModal = useSelector(ticketOpenModalSelector);
  const quantity = useSelector(quantitySelector);
  const productId = useSelector(productIdSelector);
  const questionAnswerId = useSelector(questionAnswerIdSelector);
  const { data, isLoading: ticketLoading } = useSWR(
    productId ? `/product/ticket/details/${productId}` : null,
    ticketService.getProductTicketDetails,
    {
      fallbackData: {
        product: null,
        question: null,
      },
      refreshInterval: 60 * 1000,
    },
  );
  const dispatch = useDispatch<AppDispatch>();

  const { product, question } = data;
  const calculatedPrice = product
    ? (product.price * quantity).toFixed(2)
    : undefined;

  useEffect(() => {
    let timer;
    if (product) {
      timer = setInterval(() => {
        const now = dayjs();
        const rewardDate = dayjs(product.drawDate);
        const remainingTime = rewardDate.diff(now);
        // Check if the target date has passed
        if (remainingTime <= 0) {
          clearInterval(timer);
        } else {
          setCountDown((prev: any) => ({
            ...prev,
            ...productService.getProductCountDown(product.drawDate),
          }));
        }
      });
    }
    return () => clearInterval(timer);
  }, [product]);

  const handleCloseModal = () => {
    dispatch(closeModalTicketModal());
    dispatch(setQuantity(1));
    setQuantityInput("1");
  };

  const handleAddToBasketClick = () => {
    handleCloseModal();
    dispatch(
      setBasketItem({
        calculatedPrice: parseFloat(calculatedPrice),
        productId: product.id,
        productName: product.name,
        productThumbnail: product.thumbnailUrl,
        quantity: quantity,
        productPrice: product.price,
      }),
    );
  };

  const handleIncrementQuantity = (valueToAdd: number) => () => {
    const newQuantity = ticketService.increaseQuantity(
      product.maxTicketsPerPerson,
      quantity,
      valueToAdd,
    );
    dispatch(setQuantity(newQuantity));
    setQuantityInput(`${newQuantity}`);
  };
  const handleDecreamentQuantity = (valueToRemove: number) => () => {
    const newQuantity = ticketService.decreaseQuantity(quantity, valueToRemove);
    dispatch(setQuantity(newQuantity));
    setQuantityInput(`${newQuantity}`);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const valueToAdd = event.target.value;

    if (valueToAdd.length === 0) {
      setQuantityInput(valueToAdd);
      dispatch(setQuantity(1));
      return;
    }
    if (/^[0-9]+$/.test(valueToAdd)) {
      setQuantityInput(valueToAdd);
      dispatch(setQuantity(+valueToAdd));
    }
  };

  const handleQuestionChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(
      setQuestionAnswer({
        questionAnswerId: event.target.value,
        questionId: question.id,
      }),
    );
  };

  const handleSetMaxQuantity = (maxTicketsPerPerson: number) => () => {
    dispatch(setQuantity(maxTicketsPerPerson));
    setQuantityInput(`${maxTicketsPerPerson}`);
  };

  return {
    questionAnswerId,
    ticketLoading,
    openTickeModal,
    product,
    question,
    countDown,
    quantity,
    quantityInput,
    calculatedPrice,
    handleAddToBasketClick,
    handleDecreamentQuantity,
    handleCloseModal,
    handleIncrementQuantity,
    handleQuantityChange,
    handleQuestionChange,
    handleSetMaxQuantity,
  };
};
