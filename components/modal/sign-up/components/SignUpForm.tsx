import React from "react";
import { useSignUpValidation } from "components/modal/sign-up/hooks";
import { ErrorHelperMessage } from "shared/components";
import { isErrorMessage } from "shared/utils";

export const SignUpForm = () => {
  const {
    register,
    errors,
    isSubmitting,
    onSubmit,
    handleAcceptTermsConditions,
  } = useSignUpValidation();

  return (
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
      <div className="form-group">
        <label>
          Confirm Email <sup>*</sup>
        </label>
        <input
          type="text"
          name="confirmEmail"
          id="confirmEmail"
          placeholder="Enter your email"
          {...register("confirmEmail")}
        />
        <ErrorHelperMessage message={isErrorMessage("confirmEmail", errors)} />
      </div>
      <div className="form-group">
        <label>
          First Name <sup>*</sup>
        </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          {...register("firstName")}
        />
        <ErrorHelperMessage message={isErrorMessage("firstName", errors)} />
      </div>
      <div className="form-group">
        <label>
          Last Name <sup>*</sup>
        </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
        <ErrorHelperMessage message={isErrorMessage("lastName", errors)} />
      </div>
      <div className="form-group">
        <label>
          Date of Birth <sup>*</sup>
        </label>
        <input
          type="text"
          name="dob"
          id="dob"
          placeholder="dd/mm/yyyy"
          {...register("dob")}
        />
        <ErrorHelperMessage message={isErrorMessage("dob", errors)} />
      </div>
      <div className="form-group">
        <label>
          Phone <sup>*</sup>
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
          {...register("phoneNumber")}
        />
        <ErrorHelperMessage message={isErrorMessage("phoneNumber", errors)} />
      </div>
      <div className="form-group">
        <label>
          password <sup>*</sup>
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          {...register("password")}
        />
        <ErrorHelperMessage message={isErrorMessage("password", errors)} />
      </div>
      <div className="form-group">
        <label>
          confirm password <sup>*</sup>
        </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <ErrorHelperMessage
          message={isErrorMessage("confirmPassword", errors)}
        />
      </div>
      <div className="d-flex flex-wrap mt-2">
        <div className="custom-checkbox">
          <input
            type="checkbox"
            name="acceptTerms"
            id="acceptTerms"
            {...register("acceptTerms")}
            onChange={handleAcceptTermsConditions}
          />
          <label htmlFor="acceptTerms">I agree to the</label>
          <span className="checkbox"></span>
        </div>
        <a href="#0" className="link ml-1">
          Terms, Privacy Policy and Fees
        </a>
      </div>
      <div className="form-group text-center mt-5">
        <button disabled={isSubmitting} type="submit" className="cmn-btn">
          Sign Up
        </button>
      </div>
    </form>
  );
};
