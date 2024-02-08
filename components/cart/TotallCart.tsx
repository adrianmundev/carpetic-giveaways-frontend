import { useState } from "react";
import cartData from "../../data/cartData";
import QuickPick from "../quickPick/QuickPick";
import AllTickets from "./AllTickets";
import Prices from "./Prices";
import { useProductCartItems } from "@/components/cart/hooks/useProductCartItems";

const TotallCart = () => {
  const { basketItems, handleRemoveItem, handleClearBasket, totalPrice } =
    useProductCartItems();
  const [allTicket, setAllTicket] = useState(cartData);

  return (
    <section className="pb-120 mt-minus-300">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cart-wrapper">
              <h2 className="cart-wrapper__title">My Cart</h2>
              {basketItems.length ? (
                <div className="row">
                  {/* All tickets section here */}
                  <AllTickets
                    basketItems={basketItems}
                    removeTicket={handleRemoveItem}
                  />

                  {/* Prices section here */}
                  <Prices totalPrice={totalPrice} />
                </div>
              ) : (
                <div className="tw-w-full tw-flex tw-justify-center">
                  <p className="tw-text-Razzmatazz">No Cart Items</p>
                </div>
              )}
            </div>
          </div>

          {/* QuickPick section here */}
          <QuickPick />
        </div>
      </div>
    </section>
  );
};

export default TotallCart;
