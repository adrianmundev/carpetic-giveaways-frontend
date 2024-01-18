import Image from "next/image";
import contact_1 from "/public/images/icon/counter//1.png";
import contact_2 from "/public/images/icon/counter//2.png";
import contact_3 from "/public/images/icon/counter//3.png";

const Counter = () => {
  return (
    <div className="counter-section">
      <div className="container">
        <div className="row counter-wrapper mx-0 justify-content-center">
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="counter-item">
              <div className="counter-item__icon">
                <Image src={contact_1} alt="image" />
              </div>
              <div className="counter-item__content">
                <span>23</span>
                <p>Last Month Winners</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="counter-item">
              <div className="counter-item__icon">
                <Image src={contact_2} alt="image" />
              </div>
              <div className="counter-item__content">
                <span>2837K</span>
                <p>Tickets Sold</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="counter-item">
              <div className="counter-item__icon">
                <Image src={contact_3} alt="image" />
              </div>
              <div className="counter-item__content">
                <span>28387K</span>
                <p>Payouts to Winners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
