import { cn } from "@/shared/utils";
import React, { useState } from "react";

type CompetitionsOverviewProps = {
  children: React.ReactNode | React.ReactElement;
};

export const CompetitionOverview: React.FC<CompetitionsOverviewProps> = ({
  children,
}) => {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleCollapse = () => setIsCollapse(!isCollapse);

  return (
    <div className="tw-flex tw-w-full tw-max-w-[780px] tw-gap-7">
      <div
        className={cn(
          "tw-transition-all tw-overflow-hidden tw-whitespace-pre-line tw-relative tw-max-h-12",
          isCollapse && "tw-max-h-96",
        )}
      >
        <p className="tw-text-sm tw-leading-[22px]">{children}</p>
        {!isCollapse && <div className="competition-overview-gradient" />}
      </div>
      <div className="tw-text-SelectiveYellow tw-flex tw-flex-col tw-justify-end">
        <button onClick={handleCollapse} className="tw-underline">
          Close
        </button>
      </div>
    </div>
  );
};
