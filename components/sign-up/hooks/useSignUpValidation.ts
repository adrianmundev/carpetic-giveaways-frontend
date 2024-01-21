import { setUser } from "@/redux/slices/auth/auth.slice";
import { authService } from "@/shared/services";
import { fetchTimeZone, transformError } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  SignUpInputType,
  signUpValidationSchema,
} from "shared/validation-schemas";

export const useSignUpValidation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    setValue,
    formState: { errors, touchedFields, isSubmitting },
    handleSubmit,
  } = useForm<SignUpInputType>({
    resolver: zodResolver(signUpValidationSchema),
    mode: "all",
    reValidateMode: "onChange",
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

  return {
    touchedFields,
    isSubmitting,
    errors,
    register,
    onSubmit: handleSubmit(onSubmit),
    handleAcceptTermsConditions,
  };
};
