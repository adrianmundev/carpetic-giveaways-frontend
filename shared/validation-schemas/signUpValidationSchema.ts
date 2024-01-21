import { z } from "zod";
const dayjs = require("dayjs");

function isEighteenOrOlder(birthdate: string) {
  const year = birthdate.split("/")[2];
  const month = birthdate.split("/")[1];
  const day = birthdate.split("/")[0];

  // Parse the birthdate string to a Date object
  const birthDateObj = dayjs(year, month, day);

  if (!birthDateObj.isValid()) {
    return false;
  }

  // Calculate the current date
  const currentDate = dayjs();

  // Calculate the difference in years
  const age = currentDate.year() - birthDateObj.year();

  // Check if the birthday has occurred for this year
  const hasBirthdayOccurred =
    currentDate.month() > birthDateObj.month() ||
    (currentDate.month() === birthDateObj.month() &&
      currentDate.date() >= birthDateObj.date());

  // Check if the person is 18 years or older
  return age > 18 || (age === 18 && hasBirthdayOccurred);
}

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
          console.log(
            /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value),
          );
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
    phoneNumber: z
      .string({
        required_error: "Phone is a required field",
      })
      .min(1, "Phone is a required field"),
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
      .min(8, "Password must be between 8 and 12 characters"),
    confirmPassword: z
      .string({
        required_error: "Confirm password is a required field",
      })
      .min(8, "Password must be between 8 and 12 characters"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords must be matched",
    path: ["confirmPassword"],
  });

export type SignUpInputType = z.infer<typeof signUpValidationSchema>;
