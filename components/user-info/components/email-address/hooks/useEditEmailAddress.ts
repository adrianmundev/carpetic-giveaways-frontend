import { updateUser } from "@/redux/slices/auth/auth.slice";
import { userSelector } from "@/redux/slices/auth/selectors";
import { userService } from "@/shared/services/user.service";
import { transformError } from "@/shared/utils";
import {
  EditEmailAddressInputType,
  editEmailAddressValidationSchema,
} from "@/shared/validation-schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const useEditEmailAddress = (closeEditMode: () => void) => {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const {
    control,
    formState: { errors, isSubmitting, isDirty },
    handleSubmit,
  } = useForm<EditEmailAddressInputType>({
    resolver: zodResolver(editEmailAddressValidationSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      email: user?.email || "",
    },
  });

  const onSubmit = async (values: EditEmailAddressInputType) => {
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

  return {
    control,
    onsubmit: handleSubmit(onSubmit),
    user,
    errors,
    isSubmitting,
  };
};
