import HowToPlay from "../components/common/HowToPlay";
import LatestWinner from "../components/common/LatestWinner";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import CurrentContest from "../components/home-four/CurrentContest";
import Hero from "../components/home-four/Hero";
import NextDraw from "../components/home-four/NextDraw";

export default function HomeFour() {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* Next draw section */}
      <NextDraw />

      {/* How to pay section */}
      <HowToPlay />

      {/* Current contest section */}
      <CurrentContest />

      {/* Latest winner section */}
      <LatestWinner />

      {/* Testimonial section */}
      <Testimonial />

      {/* Support section */}
      <Support />
    </>
  );
}
