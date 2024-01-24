import { z } from "zod";

export const resetPasswordSchema = z
  .object({
    confirmPassword: z
      .string({
        required_error: "Password is a required field",
      })
      .min(1, "Password is a required field"),
    password: z
      .string({
        required_error: "Password is a required field",
      })
      .min(6, "Password must be between 6 and 12 characters")
      .max(12),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords must be matched",
    path: ["confirmPassword"],
  });

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;
