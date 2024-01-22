import React from "react";
import { useSignUpValidation } from "@/components/sign-up/hooks";
import {
  Checkbox,
  ErrorHelperMessage,
  PhoneNumberInput,
} from "shared/components";
import { isErrorMessage } from "shared/utils";

export const SignUpForm = () => {
  const {
    register,
    errors,
    control,
    isSubmitting,
    onSubmit,
    handleAcceptTermsConditions,
    handleBirthdayChange,
    handlePhoneNumberChange,
    showConfirmPasswordLabel,
    showPasswordLabel,
    handleShowPassword,
    showConfirmPasswordType,
    showPasswordType,
  } = useSignUpValidation();

  console.log(errors);

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
          onChange={handleBirthdayChange}
        />
        <ErrorHelperMessage message={isErrorMessage("dob", errors)} />
      </div>
      <div className="form-group">
        <label>
          Phone <sup>*</sup>
        </label>
        <PhoneNumberInput
          id="phoneNumber"
          control={control}
          handleOnChange={handlePhoneNumberChange}
        />
        <ErrorHelperMessage message={isErrorMessage("phoneNumber", errors)} />
      </div>
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
        <ErrorHelperMessage message={isErrorMessage("password", errors)} />
      </div>
      <div className="form-group tw-relative">
        <label>
          confirm password <sup>*</sup>
        </label>
        <input
          type={showConfirmPasswordType}
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
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
      <div className="d-flex flex-wrap mt-2">
        <div className="custom-checkbox">
          <Checkbox
            label="I Agree to"
            name="acceptTerms"
            id="acceptTerms"
            {...register("acceptTerms")}
            onChange={handleAcceptTermsConditions}
          />
        </div>
        <a href="#0" className="link ml-1 tw-ml-1 mt-1">
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
