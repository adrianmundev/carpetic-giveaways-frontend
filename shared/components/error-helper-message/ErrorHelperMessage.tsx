import React from "react";

export const ErrorHelperMessage = ({ message }) => {
  if (!message) {
    return null;
  }

  return (
    <div className="tw-mt-2 tw-ml-2 tw-text-lg tw-font-medium tw-text-red-500">
      {message}
    </div>
  );
};
