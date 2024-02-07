import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { ITicketState } from "@/redux/slices/ticket/ticket.slice";

export const ticketOpenModalSelector = createSelector<
  [(state: RootState) => ITicketState],
  boolean
>(
  (state) => state.ticket,
  (values) => values.openModal,
);
