import { Product } from "@/shared/types/product";
import { apiClient } from "./api.service";

type ProductQuestionAnswer = {
  id: string;
  answer: string;
};

type ProductQuestion = {
  id: string;
  question: string;
  answers: ProductQuestionAnswer[];
};

export type TicketDetailsResponse = {
  product: Product;
  question: ProductQuestion;
};

export class TicketService {
  public increaseQuantity(
    maxUserTickets: number,
    currentQuantity: number,
    valueToAdd: number,
  ): number {
    if (currentQuantity > maxUserTickets) {
      return currentQuantity;
    }

    const newValue = currentQuantity + valueToAdd;

    if (newValue > maxUserTickets) {
      return currentQuantity;
    }

    return currentQuantity + valueToAdd;
  }

  public decreaseQuantity(currentQuantity: number, valueToAdd: number): number {
    if (currentQuantity === 1 || currentQuantity === 0) {
      return 1;
    }

    return currentQuantity - valueToAdd;
  }

  public async getProductTicketDetails(url) {
    const response = await apiClient.get<TicketDetailsResponse>(url);
    return response.data;
  }
}

export const ticketService = new TicketService();
