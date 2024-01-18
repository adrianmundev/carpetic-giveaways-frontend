import Image from "next/image";
import React from "react";
import Banner from "../components/common/Banner";
import ContestBody from "../components/contest-details-two/ContestBody";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

import "slick-carousel/slick/slick.css";

const ContestDetailsTwo = () => {
  return (
    <>
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner hero shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Contest No: B2T", "/"],
          ]}
        />
      </div>

      {/* Contest body section here */}
      <ContestBody />
    </>
  );
};

export default ContestDetailsTwo;
