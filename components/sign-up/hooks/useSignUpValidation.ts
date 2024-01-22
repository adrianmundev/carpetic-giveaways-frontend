import { setUser } from "@/redux/slices/auth/auth.slice";
import { authService } from "@/shared/services";
import {
  fetchTimeZone,
  transformError,
  validatePhoneNumber,
} from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CountryData } from "react-phone-input-2";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  SignUpInputType,
  signUpValidationSchema,
} from "shared/validation-schemas";

export const useSignUpValidation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    control,
    setValue,
    watch,
    setError,
    clearErrors,
    formState: { errors, touchedFields, isSubmitting },
    handleSubmit,
  } = useForm<SignUpInputType>({
    resolver: zodResolver(signUpValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      confirmEmail: "",
      password: "",
      dob: "",
      acceptTerms: false,
    },
  });

  const dob = watch("dob");

  const onSubmit = async (values: SignUpInputType) => {
    try {
      const user = await authService.register({
        ...values,
        timezone: fetchTimeZone(),
      });
      dispatch(setUser(user));
      router.replace("/");
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  const handleAcceptTermsConditions = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setValue("acceptTerms", event.target.checked);
  };

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (/^[0-9\/]+$/.test(value) && value.length <= 10) {
      if (dob.lastIndexOf("/") !== 2 && value.length === 2) {
        // date slash
        value += "/";
      }

      if (dob.lastIndexOf("/") !== 5 && value.length === 5) {
        // month slash
        value += "/";
      }
      setValue("dob", value);
    }
  };

  const handleShowPassword = (label: "showPassword") => () => {
    if (label === "showPassword") {
      setShowPassword((prev) => !prev);
    }
  };

  const handlePhoneNumberChange = (value: string, inputData: CountryData) => {
    setValue("phoneDialCode", inputData.dialCode);
    setValue("phoneCountryCode", inputData.countryCode);
    setValue("phoneNumber", value);
    const isValid = validatePhoneNumber(value, inputData);
    if (!isValid) {
      setError("phoneNumber", {
        message: "Please add a valid phone number",
      });
    } else {
      clearErrors("phoneNumber");
    }
  };

  return {
    touchedFields,
    isSubmitting,
    errors,
    control,
    register,
    onSubmit: handleSubmit(onSubmit),
    dob,
    handleAcceptTermsConditions,
    handleBirthdayChange,
    handleShowPassword,
    handlePhoneNumberChange,
    showPasswordLabel: showPassword ? "Hide" : "Show",
    showPasswordType: showPassword ? "text" : "password",
  };
};
