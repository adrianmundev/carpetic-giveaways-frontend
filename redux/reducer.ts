import { combineReducers } from "@reduxjs/toolkit";
import { authSliceReducer } from "@/redux/slices/auth/auth.slice";
import { ticketSliceReducer } from "@/redux/slices/ticket/ticket.slice";
import { basketSliceReducer } from "@/redux/slices/basket/basket.slice";

export const reducer = combineReducers({
  auth: authSliceReducer,
  ticket: ticketSliceReducer,
  basket: basketSliceReducer,
});
