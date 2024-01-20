import { UserRoleEnum } from "@/redux/slices/auth/enums";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: UserRoleEnum;
  createdAt: Date;
  updatedAt: Date;
};
