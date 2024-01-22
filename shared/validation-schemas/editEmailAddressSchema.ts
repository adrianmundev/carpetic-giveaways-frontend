import { z } from "zod";

export const editEmailAddressValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is a required field",
    })
    .email(),
});

export type EditEmailAddressInputType = z.infer<
  typeof editEmailAddressValidationSchema
>;
