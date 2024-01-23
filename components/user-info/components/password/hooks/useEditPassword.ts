import { userSelector } from "@/redux/slices/auth/selectors";
import { authService } from "@/shared/services";
import { transformError } from "@/shared/utils";
import {
  EditPasswordInput,
  editPasswordSchema,
} from "@/shared/validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useEditPassword = (closeEditMode: () => void) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [apiError, setApiError] = useState("");
  const user = useSelector(userSelector);
  const {
    control,
    formState: { errors, isSubmitting, isDirty },
    handleSubmit,
  } = useForm<EditPasswordInput>({
    resolver: zodResolver(editPasswordSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });

  const onSubmit = async (values: EditPasswordInput) => {
    try {
      if (!isDirty) {
        return closeEditMode();
      }
      const changed = await authService.changePassword(values);
      if (changed) {
        window.location.href = "/";
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const message = error.response.data?.message;
        setApiError(typeof message === "string" ? message : message[0]);
        return null;
      }
      toast.error(transformError(error).message);
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleShowCurrentPassword = () => {
    setShowCurrentPassword((prev) => !prev);
  };

  const handleCloseApiError = () => {
    setApiError("");
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    user,
    errors,
    isSubmitting,
    apiError,
    handleShowPassword,
    handleShowCurrentPassword,
    handleCloseApiError,
    showPasswordLabel: showPassword ? "Hide" : "Show",
    showPasswordType: showPassword ? "text" : "password",
    showCurrentPasswordLabel: showCurrentPassword ? "Hide" : "Show",
    showCurrentPasswordType: showCurrentPassword ? "text" : "password",
  };
};
