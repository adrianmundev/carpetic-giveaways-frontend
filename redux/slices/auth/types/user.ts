import { UserRoleEnum } from "@/redux/slices/auth/enums";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  dob: string;
  phoneNumber: string;
  phoneDialCode: string;
  phoneCountryCode: string;
  addressLine1: string;
  role: UserRoleEnum;
  createdAt: Date;
  updatedAt: Date;
};
