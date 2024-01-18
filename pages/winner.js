import LatestWinner from "../components/common/LatestWinner";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import Banner from "../components/winner/Banner";
import WinningNumber from "../components/winner/WinningNumber";

const Winner = () => {
  return (
    <>
      {/* Banner section here*/}
      <Banner />

      {/* Winning Number section */}
      <WinningNumber />

      {/* Latest Winner section */}
      <LatestWinner />

      {/* Testimonial section */}
      <Testimonial />

      {/* Support section */}
      <Support />
    </>
  );
};

export default Winner;
