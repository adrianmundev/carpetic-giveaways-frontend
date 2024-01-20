import React from "react";

export const CircleLoader = () => {
  return (
    <div className="tw-flex tw-gap-4 tw-flex-wrap tw-justify-center">
      <img
        className="tw-w-20 tw-h-20 tw-animate-spin"
        src="https://www.svgrepo.com/show/448500/loading.svg"
        alt="Loading icon"
      />
    </div>
  );
};
