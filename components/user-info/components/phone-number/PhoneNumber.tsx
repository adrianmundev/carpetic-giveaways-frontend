import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { useEditable } from "@/components/user-info/hooks";
import { cn } from "@/shared/utils";
import { ReadModePhoneNumer } from "./ReadModePhoneNumer";
import { EditPhoneNumber } from "./EditPhoneNumber";

export const PhoneNumber = () => {
  const { handleEditMode, isEditable, user } = useEditable();
  return (
    <div className="user-info-card">
      <div className="user-info-card__header">
        <h3 className="user-info-card__title">Phone</h3>
        <button
          onClick={handleEditMode}
          type="button"
          className={cn(
            isEditable ? "tw-hidden" : "d-flex",
            "align-items-start gap-1",
          )}
        >
          <FaRegEdit className="fs-4" /> Edit
        </button>
      </div>
      {isEditable ? (
        <EditPhoneNumber closeEditMode={handleEditMode} />
      ) : (
        <ReadModePhoneNumer user={user} />
      )}
    </div>
  );
};
