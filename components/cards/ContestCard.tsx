import { Product } from "@/shared/types/product";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import dayjs from "dayjs";

type ContestCardProps = {
  product: Product;
};

const ContestCard: React.FC<ContestCardProps> = ({ product }) => {
  const displayRemainingDays = (drawDate: Date) => {
    const now = dayjs();
    const rewardDate = dayjs(drawDate);
    const days = rewardDate.diff(now, "days");
    if (days < 0) {
      return null;
    }

    return days;
  };

  const thumbnail = product.thumbnailUrl || product.images[0]?.imageUrl;

  return (
    <div className="contest-card">
      <div className="contest-card__thumb">
        <Image src={thumbnail} alt={product.name} fill />
        <a
          href="#0"
          className="action-icon tw-flex tw-justify-center tw-items-center"
        >
          <FaRegHeart />
        </a>
        {/* <div className="contest-num">
          <span>contest no:</span>
          <h4 className="number">{it}</h4>
        </div> */}
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
