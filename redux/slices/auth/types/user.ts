import { UserRoleEnum } from "@/redux/slices/auth/enums";

export type User = {
  id: string;
  userId: number;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  dob: string;
  phoneNumber: string;
  phoneDialCode: string;
  phoneCountryCode: string;
  country: string;
  city: string;
  company: string;
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  role: UserRoleEnum;
  createdAt: Date;
  updatedAt: Date;
};
