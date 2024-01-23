import { User } from "@/redux/slices/auth/types";
import { formatPhoneNumber } from "@/shared/utils";
import React from "react";

type Props = {
  user: User;
};

export const ReadModePhoneNumer: React.FC<Props> = ({ user }) => {
  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Mobile</span>
        <span className="value">
          {user?.phoneCountryCode
            ? formatPhoneNumber(user.phoneNumber, user.phoneCountryCode)
            : user.phoneNumber}
        </span>
      </li>
    </ul>
  );
};
