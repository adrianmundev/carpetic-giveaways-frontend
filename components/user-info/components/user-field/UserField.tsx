import { ErrorHelperMessage } from "@/shared/components";
import { isErrorMessage } from "@/shared/utils";
import React from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";

type UserFieldProps = {
  label: string;
  inputType: string;
  name?:
    | "firstName"
    | "lastName"
    | "dob"
    | "addressLine1"
    | "email"
    | "phoneNumber"
    | "currentPassword"
    | "newPassword";
  control: Control<FieldValues, any>;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  errors: FieldErrors<FieldValues>;
};

export const UserField: React.FC<UserFieldProps> = ({
  label,
  name,
  control,
  inputType,
  onChange,
  errors,
}) => {
  return (
    <div className="tw-flex tw-items-center tw-flex-wrap md:tw-flex-nowrap">
      <span className="tw-text-sm tw-text-white md:tw-text-lg tw-w-44 mb-2">
        {label}
      </span>
      <div className="tw-w-full">
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const { onChange: handleChange, ...rest } = field;
            return (
              <input
                className="form-control form-color"
                type={inputType}
                name={name}
                id={name}
                placeholder={label}
                {...rest}
                onChange={onChange || handleChange}
              />
            );
          }}
        />
        <ErrorHelperMessage message={isErrorMessage(name, errors)} />
      </div>
    </div>
  );
};
