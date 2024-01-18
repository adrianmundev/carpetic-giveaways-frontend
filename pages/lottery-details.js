import Image from "next/image";
import Banner from "../components/common/Banner";
import LotteryBody from "../components/lottery-details/LotteryBody";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";

const LotteryDetails = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner hero shape" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Lottery", "/"],
            ["Contest No: B2T", "/"],
            ["Pick your Lottery Number", "/"],
          ]}
        />
      </div>

      {/* Lottery Body Here */}
      <LotteryBody />
    </>
  );
};

export default LotteryDetails;
