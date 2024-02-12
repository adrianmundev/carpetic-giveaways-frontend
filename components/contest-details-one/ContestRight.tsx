import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Product } from "@/shared/types/product";
import { calculateTicketPercentage } from "@/shared/utils";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { getProductTicketDetails } from "@/redux/slices/ticket/ticket.slice";
import Image from "next/image";

type ContestRightProp = {
  product: Product;
};

const ContestRight: React.FC<ContestRightProp> = ({ product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const ticketPercentage = calculateTicketPercentage(
    product.totalTickets,
    product.ticketsSold,
  );

  const handleBuyTicketClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    dispatch(
      getProductTicketDetails({
        productId: product.id,
      }),
    );
  };

  return (
    <div className="contest-cart__right">
      <h4 className="subtitle">Enter now for a chance to win</h4>
      <h3 className="contest-name">{product.name}</h3>
      <div className="tw-flex tw-items-center tw-gap-3">
        <div className="tw-relative tw-h-5 tw-w-5">
          <Image src="/images/user/symbol.svg" alt="User Icon" fill />
        </div>
        <p className="tw-translate-y-1">
          Max {product.maxTicketsPerPerson} per person. Buy{" "}
          <span className="tw-text-SelectiveYellow">
            {product.maxTicketsPerPerson}
          </span>{" "}
          more tickets
        </p>
      </div>
      <div className="tw-flex tw-items-center tw-gap-3 mb-4">
        <div className="tw-relative tw-h-5 tw-w-5">
          <Image src="/images/entries.svg" alt="User Icon" fill />
        </div>
        <p className="tw-translate-y-1">{product.totalTickets} entries</p>
      </div>
      {/* <div className="contest-num">
        Contest no: <span>B2T</span>
      </div> */}
      <h4>Tickets Sold</h4>
      <div className="ticket-amount">
        <span className="left">0</span>
        <span className="right">{product.totalTickets}</span>
        <div className="progressbar" data-perc={`${ticketPercentage}%`}>
          <div
            className="bar"
            style={{
              width: ticketPercentage > 0 ? `${ticketPercentage}%` : 0,
            }}
          />
        </div>
        <p>Only {product.totalTickets - product.ticketsSold} remaining!</p>
      </div>

      <div className="d-flex flex-wrap align-items-center tw-justify-between mb-30">
        <div className="ticket-price">
          <span className="amount">£{product.price}</span>
          <small>Per ticket</small>
        </div>
        {/* <div className="select-quantity">
          <span className="caption">Quantity</span>
          <div className="quantity">
            <input
              type="number"
              value={quantity}
              // defaultValue={quantity
              // onChange={() => setQuantity(quantity)}
            />
            <div className="quantity-nav">
              <div
                className={`quantity-button ${quantity <= 0 && "pe-none"}`}
                onClick={decrementHandle}
              >
                <i className="las la-minus"></i>
              </div>
              <div
                className={`quantity-button quantity-up ${
                  quantity >= 16 && "pe-none"
                }`}
                onClick={incrementHandle}
              >
                <i className="las la-plus"></i>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mt-sm-0 mt-3">
          <div
            onClick={handleBuyTicketClick}
            className="cmn-btn style--three tw-cursor-pointer"
          >
            buy tickets
          </div>
        </div>
      </div>
      <ul className="social-links align-items-center">
        <li>Share :</li>
        <li>
          <Link href="/#" className="tw-flex tw-items-center tw-justify-center">
            <FaFacebookF />
          </Link>
        </li>
        <li>
          <Link href="/#" className="tw-flex tw-items-center tw-justify-center">
            <FaTwitter />
          </Link>
        </li>
        <li>
          <Link href="/#" className="tw-flex tw-items-center tw-justify-center">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ContestRight;
