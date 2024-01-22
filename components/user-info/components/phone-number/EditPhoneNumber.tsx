import React from "react";
import { useEditPhoneNumber } from "./hooks/useEditPhoneNumber";
import { ErrorHelperMessage, PhoneNumberInput } from "@/shared/components";
import { isErrorMessage } from "@/shared/utils";

export const EditPhoneNumber = ({
  closeEditMode,
}: {
  closeEditMode: () => void;
}) => {
  const { control, errors, isSubmitting, onsubmit, handlePhoneNumberChange } =
    useEditPhoneNumber(closeEditMode);
  return (
    <form onSubmit={onsubmit}>
      <div className="user-info-card__list tw-gap-y-3 tw-flex tw-flex-col">
        <div className="tw-flex tw-items-center tw-flex-wrap md:tw-flex-nowrap">
          <span className="tw-text-sm tw-text-white md:tw-text-lg tw-w-44 mb-2">
            Mobile
          </span>
          <div className="tw-d-flex tw-w-full tw-flex-col">
            <PhoneNumberInput
              id="phoneNumber"
              control={control}
              handleOnChange={handlePhoneNumberChange}
            />
            <ErrorHelperMessage
              message={isErrorMessage("phoneNumber", errors)}
            />
          </div>
        </div>
      </div>
      <div className="form-group text-end mt-5">
        <button disabled={isSubmitting} type="submit" className="cmn-btn">
          Save
        </button>
      </div>
    </form>
  );
};
