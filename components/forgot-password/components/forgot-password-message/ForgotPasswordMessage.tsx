import { useRouter } from "next/router";
import React from "react";

export const ForgotPasswordMessage = () => {
  const router = useRouter();

  const handleRequest = () => {
    router.replace("/");
  };

  return (
    <div className="tw-container tw-max-w-xl tw-mx-auto">
      <div className="account-form-forgot-password">
        <h3 className="tw-text-3xl tw-font-semibold tw-text-left tw-uppercase">
          Check your inbox
        </h3>
        <p className="tw-text-lg tw-mb-4">
          We&apos;ve sent an email to the address provided. Can&apos;t find it?
          Check your spam folder.
        </p>
        <div className="text-left mt-2">
          <button
            onClick={handleRequest}
            type="button"
            className="cmn-btn"
            style={{
              width: "270px",
            }}
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};
