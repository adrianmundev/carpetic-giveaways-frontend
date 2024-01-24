import { ForgotPasswordForm } from "@/components/forgot-password/components";
import React from "react";

const ForgotPassword = () => {
  return (
    <section className="inner-hero-section style--four">
      <div className="tw-container tw-max-w-3xl tw-mx-auto">
        <ForgotPasswordForm />
      </div>
    </section>
  );
};

export default ForgotPassword;
