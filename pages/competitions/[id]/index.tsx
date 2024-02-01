import Image from "next/image";
import ContestBody from "@/components/contest-details-one/ContestBody";
import inner_hero_shape from "/public/images/elements/inner-hero-shape.png";
import { GetServerSidePropsContext } from "next";
import { Product } from "@/shared/types/product";

const CompetitonDetails = ({ product }: { product: Product }) => {
  return (
    <>
      {/* Banner section here */}
      <div className="inner-hero-section">
        <div className="bg-shape">
          <Image src={inner_hero_shape} alt="inner_hero_shape" />
        </div>
      </div>

      {/* Bdy section here */}
      <ContestBody product={product} />
    </>
  );
};

export default CompetitonDetails;

export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const productId = context.params?.id;

  if (!productId) {
    return {
      props: {
        notFound: true,
      },
    };
  }
  const response = await fetch(
    `${process.env.CARPETIC_BACKEND}/product/${productId}`,
  );
  if (response.ok) {
    const product = await response.json();
    return { props: { product } };
  }
  if (!response.ok) {
    return {
      props: {
        notFound: true,
      },
    };
  }
};
