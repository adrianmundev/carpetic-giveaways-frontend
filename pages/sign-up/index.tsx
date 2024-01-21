import { SignUpForm } from "@/pages/sign-up/components/SignUpForm";
import React from "react";

const SignUpPage = () => {
  return (
    <section className="inner-hero-section style--four">
      <div className="tw-container tw-max-w-3xl tw-mx-auto">
        <div className="account-form-area">
          <h3 className="title">Create your account</h3>
          <div className="account-form-wrapper">
            <SignUpForm />
            <p className="text-center mt-4">
              {" "}
              Have an account?{" "}
              <a href="#0" data-bs-toggle="modal" data-bs-target="#loginModal">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
