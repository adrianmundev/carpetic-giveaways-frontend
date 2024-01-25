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
        <span className="caption">Country</span>
        <span className="value">{user?.country || "N/A"}</span>
      </li>
      <li>
        <span className="caption">Company</span>
        <span className="value">{user?.company || "N/A"}</span>
      </li>
      <li>
        <span className="caption">Address</span>
        <span className="value">
          {[
            user?.addressLine1,
            user?.addressLine2,
            user?.city,
            user?.postalCode,
          ]
            .filter(Boolean)
            ?.join(",") || "N/A"}
        </span>
      </li>
    </ul>
  );
};
