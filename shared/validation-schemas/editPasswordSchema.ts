import { z } from "zod";
import { isEighteenOrOlder } from "@/shared/utils";

export const editPasswordSchema = z.object({
  newPassword: z
    .string({
      required_error: "Password is a required field",
    })
    .min(6, "Password must be between 6 and 12 characters")
    .max(12),
  currentPassword: z
    .string({
      required_error: "Current Password is a required field",
    })
    .min(1, "Current Password is a required field"),
});

export type EditPasswordInput = z.infer<typeof editPasswordSchema>;
