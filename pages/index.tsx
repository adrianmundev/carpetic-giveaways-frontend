import { Product } from "@/shared/types/product";
import Contest from "../components/common/Contest";
import Features from "../components/common/Features";
import HowToPlay from "../components/common/HowToPlay";
import LatestWinner from "../components/common/LatestWinner";
import Overview from "../components/common/Overview";
import Support from "../components/common/Support";
import Testimonial from "../components/common/Testimonial";
import Hero from "../components/home/Hero";
import Winner from "../components/home/Winner";
import qs from "qs";

export default function Home({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <>
      {/* here section */}
      <Hero />

      {/* How To Play section */}
      <HowToPlay />

      {/* Contest section */}
      <Contest products={products} />

      {/* Winner section */}
      <Winner />

      {/*Latest Winner section */}
      <LatestWinner />

      {/*Overview section */}
      <Overview />

      {/*Features section */}
      <Features />

      {/*Testimonial section */}
      <Testimonial />

      {/*Support section */}
      <Support />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = qs.stringify(
    {
      filter: {
        category: { equalTo: "cars" },
      },
      limit: 9,
    },
    { encode: false, arrayFormat: "repeat" },
  );
  const response = await fetch(
    `${process.env.CARPETIC_BACKEND}/product?${query}`,
  );
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};
