import libphonenumber from "google-libphonenumber";

export const formatPhoneNumber = (
  rawPhoneNumber: string,
  countryCode: string,
) => {
  const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(); // Get an instance of libphonenumber
  const phoneNumber = phoneUtil.parseAndKeepRawInput(
    rawPhoneNumber,
    countryCode,
  );
  return phoneUtil.format(
    phoneNumber,
    libphonenumber.PhoneNumberFormat.INTERNATIONAL,
  );
};
