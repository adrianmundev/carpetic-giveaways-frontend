import ContestCard from "@/components/cards/ContestCard";
import { Product } from "@/shared/types/product";
import React from "react";

type CashCompetitionsProps = {
  products: Product[];
};

export const CashCompetitions: React.FC<CashCompetitionsProps> = ({
  products,
}) => {
  return (
    <div>
      <div className="tw-flex tw-justify-between tw-items-center mb-5">
        <h2 className="tw-text-3xl tw-uppercase tw-font-bold">Cash</h2>
        <button className="tw-bg-Indigo tw-text-white tw-text-sm tw-font-bold tw-uppercase tw-h-12 tw-px-8">
          View All
        </button>
      </div>
      {products.length === 0 && (
        <div className="tw-text-center tw-text-lg tw-text-white tw-font-semibold mt-7">
          No Competitions Active
        </div>
      )}
      <div className="tw-grid tw-grid-cols-3 tw-auto-rows-min tw-gap-8">
        {products.map((product) => (
          <ContestCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
