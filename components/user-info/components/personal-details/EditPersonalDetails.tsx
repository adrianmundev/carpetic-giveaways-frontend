import React from "react";
import { useEditPersonalDetails } from "./hooks";
import { UserField } from "../user-field/UserField";

export const EditPersonalDetails = ({
  closeEditMode,
}: {
  closeEditMode: () => void;
}) => {
  const { control, onSubmit, isSubmitting, errors, handleBirthdayChange } =
    useEditPersonalDetails(closeEditMode);

  return (
    <form onSubmit={onSubmit}>
      <div className="user-info-card__list tw-gap-y-3 tw-flex tw-flex-col">
        <UserField
          name="firstName"
          control={control}
          inputType="text"
          label="First Name"
          errors={errors}
        />
        <UserField
          name="lastName"
          control={control}
          inputType="text"
          label="Last Name"
          errors={errors}
        />
        <UserField
          name="dob"
          control={control}
          inputType="text"
          label="Date of Birth"
          errors={errors}
          onChange={handleBirthdayChange}
        />
        <UserField
          name="addressLine1"
          control={control}
          inputType="text"
          label="Address"
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
