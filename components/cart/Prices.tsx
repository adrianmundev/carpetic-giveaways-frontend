import Image from "next/image";
import payment from "/public/images/elements/payment.png";

type PricesProps = {
  totalPrice: number;
};

const Prices = ({ totalPrice }: PricesProps) => {
  return (
    <div className="col-12 mt-lg-0 mt-4">
      <div className="checkout-wrapper">
        <div className="checkout-wrapper__header">
          <h3>Total Price:</h3>
        </div>
        <div className="checkout-wrapper__body">
          <ul className="price">
            {/* <li>
              <div className="left">
                <h4 className="caption">Total Items</h4>
                <span>(8 tickets X $ 4.99)</span>
              </div>
              <div className="right">
                <span className="price">$39.92</span>
              </div>
            </li> */}
            <li>
              <div className="left">
                <h4 className="caption">Total</h4>
              </div>
              <div className="right">
                <span className="price">£{totalPrice}</span>
              </div>
            </li>
          </ul>
          <div className="checkout-wrapper__btn">
            <button type="submit" className="cmn-btn">
              buy tickets
            </button>
          </div>
        </div>
      </div>
      <div className="mt-30">
        <Image src={payment} alt="payment" />
      </div>
    </div>
  );
};

export default Prices;
