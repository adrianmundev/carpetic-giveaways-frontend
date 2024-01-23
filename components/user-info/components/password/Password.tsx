import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { ReadModePassword } from "./ReadModePassword";
import { EditPassword } from "./EditPassword";
import { cn } from "@/shared/utils";
import { useEditable } from "@/components/user-info/hooks";

export const Password = () => {
  const { handleEditMode, isEditable, user } = useEditable();

  return (
    <div className="user-info-card">
      <div className="user-info-card__header">
        <h3 className="user-info-card__title">Security</h3>
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
        <EditPassword closeEditMode={handleEditMode} />
      ) : (
        <ReadModePassword user={user} />
      )}
    </div>
  );
};
