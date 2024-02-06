import React from "react";
import Banner from "@/components/common/Banner";
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
          <span>Cars</span>
        </div>
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold my-4">Cash</h2>
        <CompetitionOverview>
          Cars not taking your fancy today? Looking for a cash boost instead?
          Check out all of our latest cash competitions below where you could
          win thousands of pounds for as little as 99p. We also have loads of
          low odds cash competitions too, which means you have better chances of
          winning with less max tickets available! All of our competitions (yes,
          all!) are guaranteed to be drawn on the date set, and sometimes even
          before that day if they sell out in good time! This means you&apos;ll
          always know when a competition is set to end and none of them will
          ever be extended.
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
        category: { equalTo: "cash" },
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
