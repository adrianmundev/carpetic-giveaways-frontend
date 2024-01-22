import { updateUser } from "@/redux/slices/auth/auth.slice";
import { userSelector } from "@/redux/slices/auth/selectors";
import { userService } from "@/shared/services/user.service";
import { transformError, validatePhoneNumber } from "@/shared/utils";
import {
  editPhoneNumberSchema,
  EditPhoneNumberInput,
} from "@/shared/validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CountryData } from "react-phone-input-2";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useEditPhoneNumber = (closeEditMode: () => void) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const {
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<EditPhoneNumberInput>({
    resolver: zodResolver(editPhoneNumberSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      phoneNumber: user?.phoneNumber || "",
      phoneCountryCode: user?.phoneCountryCode || "",
      phoneDialCode: user?.phoneDialCode || "",
    },
  });

  const onSubmit = async (values: EditPhoneNumberInput) => {
    try {
      const updatedUser = await userService.update(user.id, values);
      dispatch(updateUser(updatedUser));
      closeEditMode();
    } catch (error) {
      toast.error(transformError(error).message);
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
    control,
    onsubmit: handleSubmit(onSubmit),
    user,
    errors,
    isSubmitting,
    handlePhoneNumberChange,
  };
};
