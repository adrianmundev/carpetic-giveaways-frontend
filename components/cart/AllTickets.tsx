import { BasketItem } from "@/redux/slices/basket/basket.slice";
import Image from "next/image";
import Link from "next/link";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

type AllTicketsProps = {
  basketItems: BasketItem[];
  removeTicket: (productId: string) => void;
};

const AllTickets = ({ removeTicket, basketItems }: AllTicketsProps) => {
  return (
    <div className="col-12 tw-flex-1">
      <div className="ticket-wrapper">
        <div className="ticket-wrapper__header">
          <h3>Cart Items:</h3>
          <button type="button">clear all</button>
        </div>
        <div className="ticket-wrapper__body tw-p-1">
          {basketItems.map((item) => (
            <div key={item.productId} className="single-row tw-items-center">
              <div className="tw-flex tw-flex-1 md:tw-items-center">
                <div className="tw-aspect-[3/2] tw-w-20 tw-h-16 sm:tw-w-24 sm:tw-h-20 md:tw-w-36 md:tw-h-20 tw-relative tw-flex-shrink-0">
                  <Image
                    src={item.productThumbnail}
                    alt="Product thumbnail"
                    fill
                  />
                </div>
                <div className="tw-w-2 tw-h-10" />
                <div className="tw-flex-1 tw-flex tw-flex-col lg:tw-flex-row lg:tw-items-center lg:tw-justify-between">
                  <div className="tw-flex tw-flex-col">
                    <h6 className="tw-text-xs md:tw-text-sm">
                      {item.productName}
                    </h6>
                    <div className="tw-text-green tw-text-sm md:tw-text-base tw-font-semibold">
                      £{item.productPrice} x {item.quantity}
                    </div>
                  </div>
                  <div
                    className="action-btns tw-self-end"
                    style={{ flexWrap: "nowrap" }}
                  >
                    <Link href="/lottery-details" className="edit-btn">
                      <FaPencilAlt className="fs-5" />
                    </Link>
                    <button
                      type="button"
                      className="del-btn"
                      onClick={() => removeTicket(item.productId)}
                    >
                      <FaTrashAlt className="fs-6" />
                    </button>
                  </div>
                </div>
              </div>
              {/* <ul className="numbers">
                {itm.ticket.map((single, i) => (
                  <li key={i}>{single}</li>
                ))}
                </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllTickets;
