import { Product } from "@/shared/types/product";
import { apiClient } from "./api.service";
import dayjs from "dayjs";

type CategoryProductsListing = {
  drawing: Product[];
  cars: Product[];
  cash: Product[];
  tech: Product[];
  watches: Product[];
};

class ProductService {
  public async getAllProductsList(
    url: string,
  ): Promise<CategoryProductsListing> {
    const response = await apiClient.get<CategoryProductsListing>(url);
    return response.data;
  }

  public getProductRemainingDays(drawDate: Date): number {
    const now = dayjs();
    const rewardDate = dayjs(drawDate);
    const days = rewardDate.diff(now, "days");
    return days < 0 ? 0 : days;
  }

  public getProductCountDown(drawDate: Date) {
    const now = dayjs();
    const rewardDate = dayjs(drawDate);
    const remainingTime = rewardDate.diff(now);

    // Convert remaining time to days, hours, minutes, and seconds
    const remainingDays = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
    const remainingHours = Math.floor(
      (remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000),
    );
    const remainingMinutes = Math.floor(
      (remainingTime % (60 * 60 * 1000)) / (60 * 1000),
    );
    const remainingSeconds = Math.floor((remainingTime % (60 * 1000)) / 1000);

    return {
      days: remainingDays,
      hours: remainingHours,
      minutes: remainingMinutes,
      seconds: remainingSeconds,
    };
  }

  public isDrawingSoon(drawDate: Date): boolean {
    const now = dayjs();
    const dateOfNow = now.date();
    const rewardDate = dayjs(drawDate);
    const dateOfReward = rewardDate.date();
    const days = rewardDate.diff(now, "days");
    return days <= 0 && dateOfReward > dateOfNow;
  }

  public calculateTicketPercentage = (
    totalTickets: number,
    ticketsSold: number | null,
  ): number => {
    if (!ticketsSold) return 0;

    return Math.ceil((ticketsSold / totalTickets) * 100);
  };
}

export const productService = new ProductService();
