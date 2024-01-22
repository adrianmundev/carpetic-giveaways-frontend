import { CountryData } from "react-phone-input-2";
import libphonenumber from "google-libphonenumber";

// Validates the phone number format based on country information
export const validatePhoneNumber = (
  value: string, // The phone number input value (includes the country code)
  inputInformation: CountryData, // Country information for validation(dialcode and country code)
) => {
  let isValid = true; // Assume the number is initially valid
  const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance(); // Get an instance of libphonenumber

  // Extract the actual phone number (excluding the country code)
  const phoneNumber = value.substring(inputInformation.dialCode.length);

  // Get the length of an example number based on the country code for validation
  const exampleNumberLengthByCountryCode = phoneUtil
    .getExampleNumber(inputInformation.countryCode)
    .getNationalNumber()
    ?.toString().length;

  // Check if the input length matches the example number length
  if (phoneNumber.length !== exampleNumberLengthByCountryCode) {
    return false;
  }

  // Return the validation result
  return isValid;
};
