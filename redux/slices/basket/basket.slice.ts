import { parseObject } from "@/shared/utils";
import { createSlice } from "@reduxjs/toolkit";

export type BasketItem = {
  quantity: number;
  productThumbnail: string;
  productName: string;
  productPrice: number;
  calculatedPrice: number;
  productId: string;
};

export interface IBasketState {
  items: BasketItem[];
  totalQuantity: number;
  totalPrice: number;
  newItem: BasketItem;
  openBasketModal: boolean;
}

const LOCAL_BASKET_KEY = "carpatic-app-basket";

const calculateTotalPrice = (basketItems: BasketItem[]) => {
  return basketItems.reduce((total, item) => total + item.calculatedPrice, 0);
};
const calculateTotalQuantity = (basketItems: BasketItem[]) => {
  return basketItems.reduce((total, item) => total + item.quantity, 0);
};

const setLocalBasketItems = (basketItems: BasketItem[]) => {
  localStorage.setItem(LOCAL_BASKET_KEY, JSON.stringify(basketItems));
};

let localBasketItems = [];
let totalPrice = 0;
let totalQuantity = 0;
if (typeof window !== "undefined") {
  localBasketItems = parseObject(window.localStorage.getItem("basket")) || [];

  if (localBasketItems.length) {
    totalPrice = calculateTotalPrice(localBasketItems);
    totalQuantity = calculateTotalQuantity(localBasketItems);
  }
}

const initialState: IBasketState = {
  items: localBasketItems,
  totalQuantity,
  totalPrice,
  newItem: undefined,
  openBasketModal: false,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setBasketItem: (state, { payload }: { payload: BasketItem }) => {
      const allItems = [...state.items];
      state.newItem = payload;
      allItems.push(payload);
      state.items = allItems;
      state.openBasketModal = true;
      state.totalQuantity = calculateTotalQuantity(allItems);
      state.totalPrice = calculateTotalPrice(allItems);
      setLocalBasketItems(allItems);
    },
    removeBasketItem: (state, { payload }) => {
      let basketItems = state.items;
      basketItems = basketItems.filter((item) => item.productId !== payload);
      state.items = basketItems;
      state.totalQuantity = calculateTotalQuantity(basketItems);
      state.totalPrice = calculateTotalPrice(basketItems);
      setLocalBasketItems(basketItems);
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      localStorage.removeItem(LOCAL_BASKET_KEY);
    },
    closeBasketModal: (state) => {
      state.openBasketModal = false;
    },
  },
});

export const basketSliceReducer = basketSlice.reducer;

export const {
  setBasketItem,
  closeBasketModal,
  removeBasketItem,
  clearBasket,
} = basketSlice.actions;
