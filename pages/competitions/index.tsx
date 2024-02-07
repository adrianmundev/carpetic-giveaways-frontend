import {
  CarsCompetitions,
  CashCompetitions,
  DrawingSoon,
  TechCompetitions,
  WatchesCompetitions,
} from "@/components/competitions/components";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import { productService } from "@/shared/services/product.service";
import { Product } from "@/shared/types/product";
import React from "react";
import useSWR from "swr";

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
  const { data, error, isLoading } = useSWR(
    "/product/list/all",
    productService.getAllProductsList,
    {
      fallbackData: { drawing, cars, cash, watches, tech },
      refreshWhenOffline: false,
      revalidateOnFocus: true,
      refreshInterval: 60 * 1000,
    },
  );

  if (isLoading) {
    return <CircleLoader />;
  }

  if (error) {
    return null;
  }

  return (
    <section className="inner-hero-section style--four">
      <div className="px-3">
        <span className="tw-inline-block tw-text-SelectiveYellow tw-font-medium tw-text-sm tw-mb-5">
          Competitions
        </span>
        <DrawingSoon products={data.drawing} />
        <div className="tw-w-20 tw-h-24" />
        <CarsCompetitions products={data.cars} />
        <div className="tw-w-20 tw-h-24" />
        <CashCompetitions products={data.cash} />
        <div className="tw-w-20 tw-h-24" />
        <WatchesCompetitions products={data.watches} />
        <div className="tw-w-20 tw-h-24" />
        <TechCompetitions products={data.tech} />
      </div>
    </section>
  );
};

export default Competitions;

export const getServerSideProps = async () => {
  try {
    const data = await productService.getAllProductsList("/product/list/all");
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
