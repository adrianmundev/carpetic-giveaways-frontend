import { updateUser } from "@/redux/slices/auth/auth.slice";
import { userSelector } from "@/redux/slices/auth/selectors";
import { userService } from "@/shared/services/user.service";
import { transformError } from "@/shared/utils";
import {
  EditPersonalDetailsInput,
  editPersonalDetailsSchema,
} from "@/shared/validation-schemas/editPersonalDetailsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useEditPersonalDetails = (closeEditMode: () => void) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const {
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting, isDirty },
    handleSubmit,
  } = useForm<EditPersonalDetailsInput>({
    resolver: zodResolver(editPersonalDetailsSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      dob: user?.dob || "",
      addressLine1: user?.addressLine1 || "",
      addressLine2: user?.addressLine2 || "",
      country: user?.country || "",
      city: user?.city || "",
      company: user?.company || "",
      postalCode: user?.postalCode || "",
    },
  });

  const dob = watch("dob");

  const onSubmit = async (values: EditPersonalDetailsInput) => {
    try {
      if (!isDirty) {
        return closeEditMode();
      }
      const updatedUser = await userService.update(user.id, values);
      dispatch(updateUser(updatedUser));
      closeEditMode();
    } catch (error) {
      toast.error(transformError(error).message);
    }
  };

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (dob.lastIndexOf("/") !== 2 && value.length === 2) {
      // date slash
      value += "/";
    }

    if (dob.lastIndexOf("/") !== 5 && value.length === 5) {
      // month slash
      value += "/";
    }
    setValue("dob", value);
  };

  return {
    control,
    onSubmit: handleSubmit(onSubmit),
    user,
    errors,
    isSubmitting,
    handleBirthdayChange,
  };
};
