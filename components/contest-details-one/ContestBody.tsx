import Countdown from "react-countdown";
import RendererCountdown from "../common/RendererCountdown";
import VehicleOverview from "../common/VehicleOverview";
import ContestRight from "./ContestRight";
import ContestSlider from "./ContestSlider";
import { Product } from "@/shared/types/product";
import React, { useRef } from "react";
import parse from "html-react-parser";

type ContestBodyProps = {
  product: Product;
};

const ContestBody: React.FC<ContestBodyProps> = ({ product }) => {
  const descriptionRef = useRef(parse(product.description));
  const productDetailsRef = useRef(parse(product.productDetails));
  return (
    <section className="pb-120 mt-minus-300">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="clock-wrapper">
              <p className="mb-2">This competition ends in:</p>
              <div className="clock">
                <Countdown
                  date={product.drawDate}
                  renderer={RendererCountdown}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="contest-cart">
              {/* Context slider for one */}
              <div className="contest-cart__left">
                <ContestSlider product={product} />
              </div>

              {/* Contest right section */}
              <ContestRight product={product} />
            </div>
          </div>

          <div className="col-lg-10">
            <div className="contest-description">
              <ul
                className="nav nav-tabs justify-content-center mb-30 pb-4 border-0"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn active"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    role="tab"
                    aria-controls="description"
                    aria-selected="true"
                  >
                    <span className="mr-3"></span> description
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="cmn-btn"
                    id="details-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#details"
                    role="tab"
                    aria-controls="details"
                    aria-selected="false"
                  >
                    <span className="mr-3"></span>competition details
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="description"
                  role="tabpanel"
                  aria-labelledby="description-tab"
                >
                  {/* vehicle Overview here */}
                  <div className="product-description">
                    {descriptionRef.current}
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="details"
                  role="tabpanel"
                  aria-labelledby="details-tab"
                >
                  <div className="content-block">
                    {productDetailsRef.current}
                  </div>
                </div>
              </div>
            </div>
            <VehicleOverview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContestBody;
