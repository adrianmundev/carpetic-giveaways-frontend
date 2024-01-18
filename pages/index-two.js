import Features from "../components/common/Features";
import LatestWinner from "../components/common/LatestWinner";
import Overview from "../components/common/Overview";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import Hero from "../components/home-two/Hero";
import ContestSlider from "../components/slider/ContestSlider";

export default function HomeTwo() {
  return (
    <>
      {/* here section */}
      <Hero />

      {/* Contest Slider section */}
      <ContestSlider />

      {/* Latest winner section */}
      <LatestWinner />

      {/* Overview section */}
      <Overview />

      {/* Features section */}
      <Features />

      {/* Testimonial section */}
      <Testimonial />

      {/* Support section */}
      <Support />
    </>
  );
}
