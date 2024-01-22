import { User } from "@/redux/slices/auth/types";
import { CircleLoader } from "@/shared/components/circle-loader/CircleLoader";
import React from "react";

type Props = {
  user: User;
};

export const ReadModeEmailAdress: React.FC<Props> = ({ user }) => {
  if (!user) {
    return <CircleLoader />;
  }

  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Email</span>
        <span className="value">{user?.email}</span>
      </li>
    </ul>
  );
};
