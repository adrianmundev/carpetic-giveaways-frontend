import { z } from "zod";

export const signInValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is a required field",
    })
    .email(),

  password: z
    .string({
      required_error: "Password is a required field",
    })
    .min(1, "Password is a required field"),
});

export type SignInInputType = z.infer<typeof signInValidationSchema>;
