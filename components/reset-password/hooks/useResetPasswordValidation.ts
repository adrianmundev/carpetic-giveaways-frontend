import { authService } from "@/shared/services";
import { transformError } from "@/shared/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  ResetPasswordType,
  resetPasswordSchema,
} from "shared/validation-schemas";

export const useResetPasswordValidation = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const router = useRouter();

  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ResetPasswordType>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      confirmPassword: "",
      password: "",
    },
  });
  const token = router.query.token as string;

  const onSubmit = async (values: ResetPasswordType) => {
    try {
      const isUpdated = await authService.resetPassword(values, token);
      setIsUpdated(isUpdated as boolean);
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  const handleShowPassword =
    (label: "showPassword" | "showConfirmPassword") => () => {
      if (label === "showPassword") {
        setShowPassword((prev) => !prev);
      }
      if (label === "showConfirmPassword") {
        setShowConfirmPassword((prev) => !prev);
      }
    };

  return {
    isSubmitting,
    errors,
    register,
    onSubmit: handleSubmit(onSubmit),
    isUpdated,
    handleShowPassword,
    showPasswordLabel: showPassword ? "Hide" : "Show",
    showPasswordType: showPassword ? "text" : "password",
    showConfirmPasswordLabel: showConfirmPassword ? "Hide" : "Show",
    showConfirmPasswordType: showConfirmPassword ? "text" : "password",
  };
};
