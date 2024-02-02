import {
  CarsCompetitions,
  CashCompetitions,
  DrawingSoon,
  TechCompetitions,
  WatchesCompetitions,
} from "@/components/competitions/components";
import { Product } from "@/shared/types/product";
import React from "react";

type CompetitionsProps = {
  drawing: Product[];
  cars: Product[];
  cash: Product[];
  tech: Product[];
  watches: Product[];
};

const Competitions = ({
  drawing,
  cars,
  cash,
  watches,
  tech,
}: CompetitionsProps) => {
  return (
    <section className="inner-hero-section style--four">
      <div className="px-5">
        <span className="tw-inline-block tw-text-SelectiveYellow tw-font-medium tw-text-sm tw-mb-5">
          Competitions
        </span>
        <DrawingSoon products={drawing} />
        <div className="tw-w-20 tw-h-24" />
        <CarsCompetitions products={cars} />
        <div className="tw-w-20 tw-h-24" />
        <CashCompetitions products={cash} />
        <div className="tw-w-20 tw-h-24" />
        <WatchesCompetitions products={watches} />
        <div className="tw-w-20 tw-h-24" />
        <TechCompetitions products={tech} />
      </div>
    </section>
  );
};

export default Competitions;

export const getServerSideProps = async () => {
  try {
    const response = await fetch(
      `${process.env.CARPETIC_BACKEND}/product/list/all`,
    );
    const data = await response.json();
    return {
      props: {
        ...data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error?.message || "Something went wrong",
        drawing: [],
        cars: [],
        cash: [],
        tech: [],
        watches: [],
      },
    };
  }
};
