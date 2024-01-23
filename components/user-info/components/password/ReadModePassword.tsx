import { User } from "@/redux/slices/auth/types";
import React from "react";

type Props = {
  user: User;
};

export const ReadModePassword: React.FC<Props> = ({ user }) => {
  return (
    <ul className="user-info-card__list">
      <li>
        <span className="caption">Password</span>
        <span className="value tw-pt-2">************</span>
      </li>
    </ul>
  );
};
