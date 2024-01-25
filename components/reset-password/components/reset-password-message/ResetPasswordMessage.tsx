import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export const ResetPasswordMessage = () => {
  return (
    <div className="tw-container tw-max-w-xl tw-mx-auto">
      <div className="account-form-forgot-password">
        <h3 className="tw-text-3xl tw-font-semibold tw-text-left tw-uppercase">
          Thanks!
        </h3>
        <p className="tw-text-lg tw-mb-4">
          All done, your password has been updated. You can now sign in with
          your new password
        </p>
        <div className="text-left mt-2">
          <button
            type="button"
            className="cmn-btn"
            style={{
              width: "270px",
            }}
          >
            <Link href="/">Continue to login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
