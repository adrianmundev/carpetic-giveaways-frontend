import { authService } from "@/shared/services";
import { transformError } from "@/shared/utils";
import {
  ForgotPasswordType,
  forgotPasswordSchema,
} from "@/shared/validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useForgotPasswordValidation = () => {
  const [isSendEmail, setIsSentEmail] = useState(false);
  const {
    register,
    formState: { errors, touchedFields, isSubmitting },
    handleSubmit,
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: ForgotPasswordType) => {
    try {
      const isSendEmail = await authService.forgotPassword(values);
      setIsSentEmail(isSendEmail as boolean);
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  return {
    touchedFields,
    isSubmitting,
    errors,
    register,
    isSendEmail,
    onSubmit: handleSubmit(onSubmit),
  };
};
