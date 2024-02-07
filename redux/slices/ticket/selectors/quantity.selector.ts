import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { ITicketState } from "@/redux/slices/ticket/ticket.slice";

export const quantitySelector = createSelector<
  [(state: RootState) => ITicketState],
  number
>(
  (state) => state.ticket,
  (values) => values.quantity,
);
