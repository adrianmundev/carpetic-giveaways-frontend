import { useSignInValidation } from "@/components/modal/login/hooks";
import React from "react";
import { ErrorHelperMessage } from "shared/components";
import { isErrorMessage } from "shared/utils";

export const LoginForm = () => {
  const { register, onSubmit, errors } = useSignInValidation();
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>
          Email <sup>*</sup>
        </label>
        <input
          type="email"
          name="login_name"
          id="login_name"
          placeholder="Enter your Email"
          {...register("email")}
        />
        <ErrorHelperMessage message={isErrorMessage("email", errors)} />
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
      <div className="d-flex flex-wrap justify-content-between mt-2">
        <div className="custom-checkbox">
          <input
            type="checkbox"
            name="id-1"
            id="id-1"
            defaultChecked
            required
          />
          <label htmlFor="id-1">Remember Password</label>
          <span className="checkbox"></span>
        </div>
        {/* <a href="#0" className="link">
          Forgot Password?
        </a> */}
      </div>
      <div className="form-group text-center mt-5">
        <button className="cmn-btn">log in</button>
      </div>
    </form>
  );
};
