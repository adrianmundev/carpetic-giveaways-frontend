import { User } from "@/redux/slices/auth/types";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import { formatPhoneNumber } from "@/shared/utils";
import React from "react";

type Props = {
  user: User;
};

export const ReadModePhoneNumer: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <CircleLoader />;
  }
  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Mobile</span>
        <span className="value">
          {formatPhoneNumber(user.phoneNumber, user.phoneCountryCode)}
        </span>
      </li>
    </ul>
  );
};
