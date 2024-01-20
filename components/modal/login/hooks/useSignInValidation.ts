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
  SignInInputType,
  signInValidationSchema,
} from "shared/validation-schemas";

export const useSignInValidation = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    setValue,
    formState: { errors, touchedFields, isSubmitting },
    handleSubmit,
  } = useForm<SignInInputType>({
    resolver: zodResolver(signInValidationSchema),
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: SignInInputType) => {
    try {
      const user = await authService.login({
        ...values,
      });
      dispatch(setUser(user));
      router.reload();
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  return {
    touchedFields,
    isSubmitting,
    errors,
    register,
    onSubmit: handleSubmit(onSubmit),
  };
};