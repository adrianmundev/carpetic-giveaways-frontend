import React from "react";
import { ErrorHelperMessage } from "shared/components";
import { isErrorMessage } from "shared/utils";
import { useForgotPasswordValidation } from "@/components/forgot-password/hooks";
import { ForgotPasswordMessage } from "../forgot-password-message/ForgotPasswordMessage";

export const ForgotPasswordForm = () => {
  const { register, errors, isSubmitting, onSubmit } =
    useForgotPasswordValidation();

  const isSent = true;

  if (isSent) {
    return <ForgotPasswordMessage />;
  }

  return (
    <div className="tw-container tw-max-w-3xl tw-mx-auto">
      <div className="account-form-area">
        <h3 className="tw-text-2xl tw-font-semibold tw-text-center tw-uppercase">
          Reset your Password
        </h3>
        <p className="tw-text-lg tw-text-center tw-mb-4">
          We&apos;ll send you an email with a link to create a new password
        </p>
        <div className="account-form-wrapper">
          <form autoComplete="off" onSubmit={onSubmit}>
            <div className="form-group">
              <label>
                Email <sup>*</sup>
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                {...register("email")}
              />
              <ErrorHelperMessage message={isErrorMessage("email", errors)} />
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
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
