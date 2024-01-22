import { z } from "zod";

export const editPhoneNumberSchema = z.object({
  phoneDialCode: z.string(),
  phoneCountryCode: z.string(),
  phoneNumber: z
    .string({
      required_error: "If you win we will need to call you",
    })
    .min(1, "If you win we will need to call you"),
});

export type EditPhoneNumberInput = z.infer<typeof editPhoneNumberSchema>;
