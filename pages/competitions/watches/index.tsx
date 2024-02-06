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
          <span>Watches</span>
        </div>
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold my-4">Watches</h2>
        <CompetitionOverview>
          Don&apos;t miss your chance to win one of these stunning luxury
          watches we have on the site. We like to mix things up regularly so if
          there&apos;s something here that doesn&apos;t take your fancy to make
          sure to bookmark this page to keep up to date with all of our latest
          Rolex, Tag Heuer, Breitling, Omega watches and more. We also offer
          cash alternatives on many of our watch prizes and competitions so rest
          assured that if the watch wouldn&apos;t suit yourself or that lucky
          friend or family member, there&apos;s a whole load of tax-free cash
          available instead.
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
        category: { equalTo: "watches" },
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
