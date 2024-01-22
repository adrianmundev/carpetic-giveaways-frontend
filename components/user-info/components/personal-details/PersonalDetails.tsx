import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { ReadModePersonalDetails } from "./ReadModePersonalDetails";
import { EditPersonalDetails } from "./EditPersonalDetails";
import { cn } from "@/shared/utils";
import { useEditable } from "@/components/user-info/hooks";

export const PersonalDetails = () => {
  const { handleEditMode, isEditable, user } = useEditable();

  return (
    <div className="user-info-card">
      <div className="user-info-card__header">
        <h3 className="user-info-card__title">Personal Details</h3>
        <button
          onClick={handleEditMode}
          type="button"
          className={cn(
            "align-items-start gap-1",
            isEditable ? "tw-hidden" : "d-flex",
          )}
        >
          <FaRegEdit className="fs-4" />
          Edit
        </button>
      </div>
      {isEditable ? (
        <EditPersonalDetails closeEditMode={handleEditMode} />
      ) : (
        <ReadModePersonalDetails user={user} />
      )}
    </div>
  );
};
