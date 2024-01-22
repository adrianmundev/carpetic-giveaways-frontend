import React from "react";
import { ReadModeEmailAdress } from "./ReadModeEmailAdress";
import { useEditable } from "../../hooks";

export const EmailAddress = () => {
  const { user } = useEditable();
  return (
    <div className="user-info-card">
      <div className="user-info-card__header">
        <h3 className="user-info-card__title">Email Addresses</h3>
        {/* <button
          onClick={handleEditMode}
          type="button"
          className={cn(
            isEditable ? "tw-hidden" : "d-flex",
            "align-items-start gap-1",
          )}
        >
          <FaRegEdit className="fs-4" /> Edit
        </button> */}
      </div>
      {/* {isEditable ? (
        <EditEmailAddress closeEditMode={handleEditMode} />
      ) : ( */}
      <ReadModeEmailAdress user={user} />
      {/* )} */}
    </div>
  );
};
