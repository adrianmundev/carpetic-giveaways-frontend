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
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold my-4">Cars</h2>
        <CompetitionOverview>
          Since 2018, we&apos;ve given away over 7,000+ prizes and have done a
          wide range of dream car prizes and are the UK&apos;s Largest Car
          Competition Company. Enter for a chance to win one of our many prize
          draws today. Simply answer the qualifying question, grab your ticket
          number(s), and tune in for the live draw to see if you&apos;re our
          next lucky winner. Many of our prizes come with a cash prize too to
          help with car insurance, mods, tax, and more or there are even huge
          cash alternatives available too. We have tickets available ranging
          from modded Vauxhall Corsa&apos;s to high-end dream cars like
          McLaren&apos;s, Ferrari&apos;s, Lamborghinis,
          BMW&apos;s,Porsche&apos;s, and more and there&apos;s something new
          added every week. Don&apos;t want to win a car? Then head over to see
          what cash prize and tech bundles we have available. There&apos;s
          something for everyone at Dream Car Giveaways.
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
        category: { equalTo: "cars" },
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
