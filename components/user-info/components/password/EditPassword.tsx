import React from "react";
import { useEditPassword } from "./hooks";
import { UserField } from "../user-field/UserField";
import { Alert, ErrorHelperMessage } from "@/shared/components";
import { isErrorMessage } from "@/shared/utils";
import { Controller } from "react-hook-form";

export const EditPassword = ({
  closeEditMode,
}: {
  closeEditMode: () => void;
}) => {
  const {
    control,
    onSubmit,
    isSubmitting,
    errors,
    handleShowPassword,
    handleShowCurrentPassword,
    showCurrentPasswordLabel,
    showCurrentPasswordType,
    showPasswordLabel,
    showPasswordType,
    apiError,
    handleCloseApiError,
  } = useEditPassword(closeEditMode);

  return (
    <>
      <Alert
        message={apiError}
        onClose={handleCloseApiError}
        variant="danger"
      />
      <form onSubmit={onSubmit}>
        <div className="user-info-card__list tw-gap-y-3 tw-flex tw-flex-col">
          <div className="tw-flex tw-items-center tw-flex-wrap md:tw-flex-nowrap">
            <span className="tw-text-sm tw-text-white md:tw-text-lg tw-w-44 mb-2">
              Current Password
            </span>
            <div className="tw-w-full tw-relative">
              <Controller
                control={control}
                name="currentPassword"
                render={({ field }) => (
                  <input
                    type={showCurrentPasswordType}
                    name="currentPassword"
                    id="currentPassword"
                    placeholder="password"
                    {...field}
                  />
                )}
              />
              <span
                className="tw-absolute tw-right-5 tw-top-3 tw-cursor-pointer tw-text-lg tw-text-BrightTurquoise"
                onClick={handleShowCurrentPassword}
              >
                {showCurrentPasswordLabel}
              </span>
              <ErrorHelperMessage
                message={isErrorMessage("newPassword", errors)}
              />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-flex-wrap md:tw-flex-nowrap">
            <span className="tw-text-sm tw-text-white md:tw-text-lg tw-w-44 mb-2">
              New Password
            </span>
            <div className="tw-w-full tw-relative">
              <Controller
                control={control}
                name="newPassword"
                render={({ field }) => (
                  <input
                    type={showPasswordType}
                    name="newPassword"
                    id="newPassword"
                    placeholder="password"
                    {...field}
                  />
                )}
              />
              <span
                className="tw-absolute tw-right-5 tw-top-3 tw-cursor-pointer tw-text-lg tw-text-BrightTurquoise"
                onClick={handleShowPassword}
              >
                {showPasswordLabel}
              </span>
              <ErrorHelperMessage
                message={isErrorMessage("newPassword", errors)}
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
    </>
  );
};
