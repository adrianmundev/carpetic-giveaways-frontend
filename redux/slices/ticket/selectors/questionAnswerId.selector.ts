import { RootState } from "@/redux/store";
import { createSelector } from "reselect";
import { ITicketState } from "@/redux/slices/ticket/ticket.slice";

export const questionAnswerIdSelector = createSelector<
  [(state: RootState) => ITicketState],
  string
>(
  (state) => state.ticket,
  (values) => values.questionAnswerId,
);
