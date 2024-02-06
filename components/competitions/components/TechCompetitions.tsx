import ContestCard from "@/components/cards/ContestCard";
import { TECH_ROUTE } from "@/shared/constants";
import { Product } from "@/shared/types/product";
import Link from "next/link";
import React from "react";

type TechCompetitionsProps = {
  products: Product[];
};

export const TechCompetitions: React.FC<TechCompetitionsProps> = ({
  products,
}) => {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center mb-5">
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold">Tech</h2>
        <button className="tw-bg-Indigo tw-text-white tw-text-sm tw-font-bold tw-uppercase tw-h-12 tw-px-8">
          <Link href={TECH_ROUTE}> View All</Link>
        </button>
      </div>
      {products.length === 0 && (
        <div className="tw-text-center tw-text-lg tw-text-white tw-font-semibold mt-7">
          No Competitions Active
        </div>
      )}
      <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-auto-rows-min tw-gap-8">
        {products.map((product) => (
          <ContestCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
