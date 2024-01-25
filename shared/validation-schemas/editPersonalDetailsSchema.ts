import { z } from "zod";
import { isEighteenOrOlder } from "@/shared/utils";

export const editPersonalDetailsSchema = z.object({
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
  country: z.string().optional(),
  company: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  addressLine1: z.string().optional(),
  addressLine2: z.string().optional(),
  dob: z
    .string({
      required_error: "date birth is a required field",
    })
    .refine(
      (value) => {
        return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(value);
      },
      {
        message: "Please add a valid date of birth. (Format: dd/mm/yyyy)",
      },
    )
    .refine(isEighteenOrOlder, {
      message: "Our competitions are restricted to those aged over 18",
    }),
});

export type EditPersonalDetailsInput = z.infer<
  typeof editPersonalDetailsSchema
>;
