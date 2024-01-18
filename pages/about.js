import Image from "next/image";
import AboutUs from "../components/about/AboutUs";
import Exhaustive from "../components/about/Exhaustive";
import Banner from "../components/common/Banner";
import Testimonial from "../components/common/Testimonial";
import Team from "../components/team/Team";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";

const About = () => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section style--four">
        <div className="bg-shape">
          <Image src={inner_hero_shape_2} alt="inner hero shape 2" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Pages", "/"],
            ["About Us", "/"],
          ]}
        />
      </div>

      {/* About Us section here */}
      <AboutUs />

      {/* Exhaustive section here*/}
      <Exhaustive />

      {/* Testimonial section here */}
      <Testimonial />

      {/* Team section here */}
      <Team />
    </>
  );
};

export default About;
