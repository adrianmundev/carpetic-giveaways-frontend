import { Control, FieldValues, Controller } from "react-hook-form";
import PhoneInput, { CountryData } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Define props for the PhoneInput component
interface PhoneInputProps {
  id: string; // Input identifier for referencing and rendering
  control: Control<FieldValues, any>; // React Hook Form's 'control' prop for form communication
  handleOnChange: (value: string, inputData: CountryData) => void;
}

export const PhoneNumberInput: React.FC<PhoneInputProps> = ({
  control,
  id,
  handleOnChange,
}) => {
  return (
    <Controller
      name={id}
      control={control}
      render={({ field }) => {
        return (
          <PhoneInput
            onChange={(value, inputData) =>
              handleOnChange(value, inputData as CountryData)
            }
            value={field.value}
            inputProps={{
              name: field.name,
              ref: field.ref,
            }}
            country={"ro"}
            enableLongNumbers={false}
            inputClass="phone-input"
            dropdownStyle={{
              backgroundColor: "transparent !important",
            }}
            dropdownClass="phone-dropdown"
            placeholder="Enter your phone number"
            enableSearch={false}
            countryCodeEditable={false}
            autoFormat
          />
        );
      }}
    />
  );
};
