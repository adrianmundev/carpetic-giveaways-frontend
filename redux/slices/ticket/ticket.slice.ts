import { createSlice } from "@reduxjs/toolkit";
import { ticketService } from "@/shared/services";

type TicketDetails = {
  productId: string;
};

export interface ITicketState {
  productId: string;
  openModal: boolean;
  quantity: number;
  questionId: string;
  questionAnswerId: string;
}

const initialState: ITicketState = {
  productId: "",
  openModal: false,
  quantity: 1,
  questionAnswerId: "",
  questionId: "",
};

export const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setQuantity: (state, { payload }) => {
      state.quantity = payload;
    },

    setQuestionAnswer: (
      state,
      {
        payload,
      }: { payload: { questionId: string; questionAnswerId: string } },
    ) => {
      state.questionId = payload.questionId;
      state.questionAnswerId = payload.questionAnswerId;
    },
    closeModalTicketModal: (state) => {
      state.openModal = false;
    },
    getProductTicketDetails: (
      state,
      { payload }: { payload: TicketDetails },
    ) => {
      state.productId = payload.productId;
      state.openModal = true;
    },
  },
});

export const ticketSliceReducer = ticketSlice.reducer;

export const {
  setQuestionAnswer,
  closeModalTicketModal,
  getProductTicketDetails,
  setQuantity,
} = ticketSlice.actions;
