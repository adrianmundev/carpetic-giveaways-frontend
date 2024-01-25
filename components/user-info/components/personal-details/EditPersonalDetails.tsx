import React from "react";
import { useEditPersonalDetails } from "./hooks";
import { UserField } from "../user-field/UserField";
import { Controller } from "react-hook-form";
import countries from "@/data/countries.json";
import { ErrorHelperMessage } from "@/shared/components";
import { isErrorMessage } from "@/shared/utils";

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
          disabled
          onChange={handleBirthdayChange}
        >
          <p>
            Please{" "}
            <a
              className="tw-text-SelectiveYellow"
              href="mailto:info@carpaticgiveaways.com"
            >
              contact us
            </a>{" "}
            if you wish to change your date of birth
          </p>
        </UserField>
        <div className="tw-flex tw-items-center tw-flex-wrap md:tw-flex-nowrap">
          <span className="tw-text-sm tw-text-white md:tw-text-lg tw-w-44 mb-2">
            Country
          </span>
          <div className="tw-w-full">
            <Controller
              name="country"
              control={control}
              render={({ field }) => {
                return (
                  <select className="select" {...field}>
                    {countries.map((country, index) => (
                      <option key={index} value={country.english_name}>
                        {country.english_name}
                      </option>
                    ))}
                  </select>
                );
              }}
            />
            <ErrorHelperMessage message={isErrorMessage("country", errors)} />
          </div>
        </div>
        <UserField
          name="company"
          control={control}
          inputType="text"
          label="Company"
          errors={errors}
        />
        <UserField
          name="addressLine1"
          control={control}
          inputType="text"
          label="Address"
          errors={errors}
        />
        <UserField
          name="addressLine2"
          control={control}
          inputType="text"
          label="Address 2"
          errors={errors}
        />
        <UserField
          name="city"
          control={control}
          inputType="text"
          label="City / Town"
          errors={errors}
        />
        <UserField
          name="postalCode"
          control={control}
          inputType="text"
          label="Postcode"
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
