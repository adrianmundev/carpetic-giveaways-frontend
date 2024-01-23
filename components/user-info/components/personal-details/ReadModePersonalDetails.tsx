import { User } from "@/redux/slices/auth/types";
import React from "react";

type Props = {
  user: User;
};

export const ReadModePersonalDetails: React.FC<Props> = ({ user }) => {
  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Name</span>
        <span className="value">
          {user?.firstName} {user?.lastName}
        </span>
      </li>
      <li>
        <span className="caption">Date of Birth</span>
        <span className="value">{user?.dob}</span>
      </li>
      <li>
        <span className="caption">Address</span>
        <span className="value">{user?.addressLine1 || "N/A"}</span>
      </li>
    </ul>
  );
};
