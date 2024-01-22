import React from "react";
import { UserField } from "../user-field/UserField";
import { useEditEmailAddress } from "./hooks/useEditEmailAddress";

export const EditEmailAddress = ({
  closeEditMode,
}: {
  closeEditMode: () => void;
}) => {
  const { control, errors, isSubmitting, onsubmit } =
    useEditEmailAddress(closeEditMode);
  return (
    <form onSubmit={onsubmit}>
      <div className="user-info-card__list tw-gap-y-3 tw-flex tw-flex-col">
        <UserField
          name="email"
          control={control}
          inputType="text"
          label="Email"
          errors={errors}
        />
      </div>
      <div className="form-group text-end mt-5">
        <button disabled={isSubmitting} type="submit" className="cmn-btn">
          Save
        </button>
      </div>
    </form>
  );
};
