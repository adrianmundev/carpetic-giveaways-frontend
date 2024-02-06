import React from "react";
import Link from "next/link";
import { CompetitionOverview } from "@/components/common/CompetitionOverview";
import qs from "qs";
import { Product } from "@/shared/types/product";
import ContestCard from "@/components/cards/ContestCard";

const Cars = ({ products }: { products: Product[] }) => {
  return (
    <div className="inner-hero-section style--four">
      <div className="px-3">
        <div className="tw-flex tw-items-center tw-gap-3 tw-font-medium">
          <span className="tw-text-SelectiveYellow">
            <Link href="/competitions" className="tw-text-inherit">
              Competitions
            </Link>
          </span>
          <span>/</span>
          <span>Tech</span>
        </div>
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold my-4">Tech</h2>
        <CompetitionOverview>
          Looking for the latest tech prizes for as little as 99p? We have a
          wide range of Apple bundles, Samsung bundles, car cleaning kits, Teng
          Tools mega sets, Home cinema bundles, e-bikes and more! A great way to
          get thousands of pounds worth of tech for a fraction of the cost.
          Looking for something else? Drop us a message on Facebook or the
          website and we&apos;ll do our best to get some new tech prizes on
          soon!
        </CompetitionOverview>
        <div className="tw-w-20 tw-h-12" />
        {products.length === 0 && (
          <div className="tw-text-center tw-text-lg tw-text-white tw-font-semibold mt-7">
            No Competitions Active
          </div>
        )}
        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-auto-rows-min tw-gap-8">
          {products?.map((product) => (
            <ContestCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cars;

export const getServerSideProps = async () => {
  const query = qs.stringify(
    {
      filter: {
        category: { equalTo: "tech" },
      },
      limit: 50,
    },
    { encode: false, arrayFormat: "repeat" },
  );
  const response = await fetch(
    `${process.env.CARPETIC_BACKEND}/product?${query}`,
  );
  const products = await response.json();

  return {
    props: {
      products: products || [],
    },
  };
};
