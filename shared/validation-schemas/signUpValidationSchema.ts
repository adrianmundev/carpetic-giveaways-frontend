import { z } from "zod";
import { isEighteenOrOlder } from "@/shared/utils";

export const signUpValidationSchema = z
  .object({
    acceptTerms: z.boolean().refine((value) => value === true, {
      message: "You must accept the terms and conditions",
      path: ["acceptTerms"],
    }),
    firstName: z
      .string({
        required_error: "Frist Name is a required field",
      })
      .min(1, "Frist Name is a required field"),
    lastName: z
      .string({
        required_error: "Last Name is a required field",
      })
      .min(1, "Last Name is a required field"),
    dob: z
      .string({
        required_error: "date birth is a required field",
      })
      .refine(
        (value) => {
          return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(
            value,
          );
        },
        {
          message: "Please add a valid date of birth. (Format: dd/mm/yyyy)",
        },
      )
      .refine(isEighteenOrOlder, {
        message: "Our competitions are restricted to those aged over 18",
      }),
    phoneDialCode: z.string(),
    phoneCountryCode: z.string(),
    phoneNumber: z
      .string({
        required_error: "If you win we will need to call you",
      })
      .min(
        1,
        "Please add a valid phone number, If you win we will need to call you",
      ),
    email: z
      .string({
        required_error: "Email is a required field",
      })
      .email(),
    confirmEmail: z
      .string({
        required_error: "Email is a required field",
      })
      .email(),
    password: z
      .string({
        required_error: "Password is a required field",
      })
      .min(6, "Password must be between 6 and 12 characters")
      .max(12),
  })
  .refine(({ email, confirmEmail }) => email === confirmEmail, {
    message: "Emails must be matched",
    path: ["confirmEmail"],
  });

export type SignUpInputType = z.infer<typeof signUpValidationSchema>;
