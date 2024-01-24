import React from "react";
import { ErrorHelperMessage } from "shared/components";
import { isErrorMessage } from "shared/utils";
import { useResetPasswordValidation } from "@/components/reset-password/hooks";

export const ResetPasswordForm = () => {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    handleShowPassword,
    showConfirmPasswordLabel,
    showConfirmPasswordType,
    showPasswordLabel,
    showPasswordType,
  } = useResetPasswordValidation();

  return (
    <div className="tw-container tw-max-w-3xl tw-mx-auto">
      <div className="account-form-area">
        <h3 className="title">Set a new Password</h3>
        <div className="account-form-wrapper">
          <form autoComplete="off" onSubmit={onSubmit}>
            <div className="form-group tw-relative">
              <label>
                password <sup>*</sup>
              </label>
              <input
                type={showPasswordType}
                name="password"
                id="password"
                placeholder="password"
                {...register("password")}
              />
              <span
                className="tw-absolute tw-right-5 tw-top-10 tw-cursor-pointer tw-text-lg tw-text-BrightTurquoise"
                onClick={handleShowPassword("showPassword")}
              >
                {showPasswordLabel}
              </span>
              <ErrorHelperMessage
                message={isErrorMessage("password", errors)}
              />
            </div>
            <div className="form-group tw-relative">
              <label>
                Confirm Password <sup>*</sup>
              </label>
              <input
                type={showConfirmPasswordType}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="password"
                {...register("confirmPassword")}
              />
              <span
                className="tw-absolute tw-right-5 tw-top-10 tw-cursor-pointer tw-text-lg tw-text-BrightTurquoise"
                onClick={handleShowPassword("showConfirmPassword")}
              >
                {showConfirmPasswordLabel}
              </span>
              <ErrorHelperMessage
                message={isErrorMessage("confirmPassword", errors)}
              />
            </div>
            <div className="form-group text-center mt-5">
              <button
                disabled={isSubmitting}
                type="submit"
                className="cmn-btn"
                style={{
                  width: "270px",
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
