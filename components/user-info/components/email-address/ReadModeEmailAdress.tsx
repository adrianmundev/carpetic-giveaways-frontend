import { User } from "@/redux/slices/auth/types";
import React from "react";

type Props = {
  user: User;
};

export const ReadModeEmailAdress: React.FC<Props> = ({ user }) => {
  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Email</span>
        <span className="value">{user?.email}</span>
      </li>
    </ul>
  );
};
