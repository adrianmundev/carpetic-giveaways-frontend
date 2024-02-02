import ContestCard from "@/components/cards/ContestCard";
import { Product } from "@/shared/types/product";
import React from "react";

type DrawingSoonProps = {
  products: Product[];
};

export const DrawingSoon: React.FC<DrawingSoonProps> = ({ products }) => {
  return (
    <React.Fragment>
      <h2 className="tw-text-3xl tw-uppercase tw-font-bold">Drawing Soon</h2>
      <p style={{ margin: "18px 0" }}>
        Choose a competition, grab your tickets, and tune in for the LIVE draw
        for a chance to WIN your dream car for a fraction of the cost. For free
        postal entry route see here. With over 7,000+ winners to date, you could
        be our next!
      </p>
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
    </React.Fragment>
  );
};
