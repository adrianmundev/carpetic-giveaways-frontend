import Image from "next/image";
import specification_1 from "/public/images/icon/specification/1.png";
import specification_2 from "/public/images/icon/specification/2.png";
import specification_3 from "/public/images/icon/specification/3.png";
import specification_4 from "/public/images/icon/specification/4.png";
import specification_5 from "/public/images/icon/specification/5.png";
import specification_6 from "/public/images/icon/specification/6.png";
import { Product } from "@/shared/types/product";
import React from "react";

type VehicleOverviewProps = {
  product: Product;
};

const VehicleOverview: React.FC<VehicleOverviewProps> = ({ product }) => {
  console.log(product.additionalAttributes);
  return (
    <section className="tw-mt-12">
      <div className="content-block">
        <h3 className="title">Specifications</h3>
        <div className="row mb-none-30">
          {/* <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_1} alt="specification_1" />
              </div>
              <div className="icon-item__content">
                <p>0-62mph</p>
                <span>{product.additionalAttributes.bhp} secs</span>
              </div>
            </div>
          </div> */}
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_2} alt="specification_2" />
              </div>
              <div className="icon-item__content">
                <p>Top Speed</p>
                <span>{product.additionalAttributes.speed} mph</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_3} alt="specification_3" />
              </div>
              <div className="icon-item__content">
                <p>Power</p>
                <span>{product.additionalAttributes.power} bhp</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_4} alt="specification_4" />
              </div>
              <div className="icon-item__content">
                <p>Displacement</p>
                <span>{product.additionalAttributes.displacement}ltr</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_5} alt="specification_5" />
              </div>
              <div className="icon-item__content">
                <p>bhp</p>
                <span>{product.additionalAttributes.bhp}</span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-30">
            <div className="icon-item">
              <div className="icon-item__thumb">
                <Image src={specification_6} alt="specification_6" />
              </div>
              <div className="icon-item__content">
                <p>Year</p>
                <span>{product.additionalAttributes.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleOverview;
