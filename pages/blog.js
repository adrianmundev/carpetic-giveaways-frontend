import Image from "next/image";
import Blogs from "../components/blog/Blogs";
import Winner from "../components/blog/Winner";
import Banner from "../components/common/Banner";
import inner_hero_shape_2 from "/public/images/elements/inner-hero-shape-2.png";

// css
import "slick-carousel/slick/slick.css";

const Blog = () => {
  return (
    <>
      <div className="inner-hero-section style--four">
        <div className="bg-shape">
          <Image src={inner_hero_shape_2} alt="inner hero shape 2" />
        </div>
        <Banner
          breadcrumb={[
            ["Home", "/"],
            ["Pages", "/"],
            ["Blog", "/"],
          ]}
        />
      </div>

      <section className="mt-minus-150 pb-120">
        <div className="container">
          {/* Winner section here */}
          <Winner />

          {/* Blogd section here */}
          <Blogs />
        </div>
      </section>
    </>
  );
};

export default Blog;
