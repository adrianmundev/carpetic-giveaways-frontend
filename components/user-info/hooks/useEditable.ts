import { useSelector } from "react-redux";
import { userSelector } from "@/redux/slices/auth/selectors";
import { useState } from "react";

export const useEditable = () => {
  const user = useSelector(userSelector);
  const [isEditable, setIsEditable] = useState(false);
  const handleEditMode = () => setIsEditable((prev) => !prev);

  return {
    user,
    handleEditMode,
    isEditable,
  };
};
