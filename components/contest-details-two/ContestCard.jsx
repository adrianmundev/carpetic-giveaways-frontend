import Link from "next/link";
import React, { useContext } from "react";
import Countdown from "react-countdown";
import { AppContext } from "../../context/context";
import RendererCountdown from "../common/RendererCountdown";

const ContestCard = () => {
  const { incrementHandleTwo, decrementHandleTwo, quantityTwo } =
    useContext(AppContext);

  return (
    <div className="contest-sidebar__cart">
      <div className="clock-wrapper">
        <p className="mb-2">This competition ends in:</p>
        <div className="clock">
          <Countdown
            date={Date.now() + 1000000000}
            renderer={RendererCountdown}
          />
        </div>
      </div>
      <h4 className="title">Tickets Sold</h4>
      <div className="ticket-amount">
        <span className="left">0</span>
        <span className="right">29994</span>
        <div className="progressbar" data-perc="70%">
          <div className="bar"></div>
        </div>
        <p>Only 12045 remaining!</p>
      </div>
      <div className="ticket-price text-center">
        <span className="amount">$4.99</span>
        <small>Per ticket</small>
      </div>
      <div className="select-quantity">
        <div className="quantity">
          <input
            type="number"
            value={quantityTwo}
            // defaultValue={quantityTwo}
            onChange={() => setQuantity(quantityTwo)}
          />
          <div className="quantity-nav">
            <div
              className={`quantity-button quantity-down ${
                quantityTwo <= 0 && "pe-none"
              }`}
              onClick={decrementHandleTwo}
            >
              <i className="las la-minus"></i>
            </div>
            <div
              className={`quantity-button quantity-up ${
                quantityTwo >= 16 && "pe-none"
              }`}
              onClick={incrementHandleTwo}
            >
              <i className="las la-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <Link href="/lottery-details-two" className="cmn-btn style--three">
          buy titckets
        </Link>
      </div>
    </div>
  );
};

export default ContestCard;
