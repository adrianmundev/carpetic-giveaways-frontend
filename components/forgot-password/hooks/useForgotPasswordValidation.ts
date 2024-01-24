import { transformError } from "@/shared/utils";
import {
  ForgotPasswordType,
  forgotPasswordSchema,
} from "@/shared/validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export const useForgotPasswordValidation = () => {
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
      window.location.href = "/";
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
