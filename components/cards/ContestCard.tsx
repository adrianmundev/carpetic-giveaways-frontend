import { Product } from "@/shared/types/product";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import dayjs from "dayjs";
import { calculateTicketPercentage } from "@/shared/utils";

type ContestCardProps = {
  product: Product;
};

const ContestCard: React.FC<ContestCardProps> = ({ product }) => {
  const ticketPercentage = calculateTicketPercentage(
    product.totalTickets,
    product.ticketsSold,
  );

  const displayRemainingDays = (drawDate: Date) => {
    const now = dayjs();
    const oneDayLater = now
      .add(1, "days")
      .set("hours", 23)
      .set("minutes", 59)
      .set("seconds", 59)
      .set("milliseconds", 999);

    const rewardDate = dayjs(product.drawDate);
    const days = Math.ceil(rewardDate.diff(now, "days", true));

    if (oneDayLater.isAfter(rewardDate)) {
      return null;
    }

    return days;
  };

  const displayDrawingSoonTag = () => {
    const now = dayjs();
    const oneDayLater = now.add(1, "days");

    const rewardDate = dayjs(product.drawDate);

    if (oneDayLater.isAfter(rewardDate)) {
      return (
        <div className="tw-absolute tw-bottom-0 tw-left-0 tw-flex tw-h-9">
          <div className="tw-flex tw-min-w-[180px] tw-items-center tw-bg-SelectiveYellow tw-px-4 tw-font-bold tw-text-white">
            <div className="tw-flex tw-h-screen tw-items-center tw-justify-center">
              <div className="tw-relative tw-mr-2 tw-inline-flex">
                <div className="tw-h-2 tw-w-2 tw-rounded-full tw-bg-white"></div>
                <div className="tw-absolute tw-left-0 tw-top-0 tw-h-2 tw-w-2 tw-animate-ping tw-rounded-full tw-bg-white"></div>
                <div className="tw-absolute tw-left-0 tw-top-0 tw-h-2 tw-w-2 tw-animate-pulse tw-rounded-full tw-bg-white"></div>
              </div>
            </div>
            Closes Tomorrow {dayjs(product.drawDate).format("hh:mm")}
          </div>
          <div className="tw-w-0 tw-border-r-[22px] tw-border-t-[36px] tw-border-transparent tw-border-t-SelectiveYellow" />
        </div>
      );
    }

    return null;
  };

  const thumbnail = product.thumbnailUrl || product.images[0]?.imageUrl;

  return (
    <div className="contest-card">
      <Link href={`/competitions/${product.id}`} className="item-link" />
      <div className="contest-card__thumb tw-relative">
        <Image src={thumbnail} alt={product.name} fill />
        <a
          href="#0"
          className="action-icon tw-flex tw-justify-center tw-items-center"
        >
          <FaRegHeart />
        </a>
        {displayDrawingSoonTag()}
        {/* <div className="contest-num">
          <span>contest no:</span>
          <h4 className="number">{it}</h4>
        </div> */}
      </div>
      <div className="tw-flex tw-items-center gap-2 tw-p-2">
        <div className="progressbar" data-perc={`${ticketPercentage}%`}>
          <div
            className="bar"
            style={{
              width: ticketPercentage > 0 ? `${ticketPercentage}%` : 0,
            }}
          />
        </div>
        <div className="tw-text-white tw-font-medium tw-text-nowrap">
          {ticketPercentage}% sold
        </div>
      </div>
      <div className="tw-flex tw-flex-col tw-items-start tw-gap-3 tw-p-6">
        <div className="left">
          <h5 className="contest-card__name">{product.name}</h5>
        </div>
        <div className="right tw-flex tw-items-center tw-justify-between tw-w-full">
          <span className="contest-card__price">${product.price}</span>
          <p>Ticket price</p>
        </div>
      </div>
      <div className="contest-card__footer">
        <ul className="contest-card__meta">
          <li>
            <i className="las la-clock"></i>
            <span>{displayRemainingDays(product.drawDate)}d</span>
          </li>
          <li>
            <i className="las la-ticket-alt"></i>
            <span>{product.totalTickets - product.ticketsSold}</span>
            <p>Remaining</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContestCard;
