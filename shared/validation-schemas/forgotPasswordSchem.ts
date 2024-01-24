import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: "Email is a required field",
    })
    .email(),
});

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;
