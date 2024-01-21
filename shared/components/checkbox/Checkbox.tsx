import React, { InputHTMLAttributes } from "react";
import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<CheckBoxProps> = ({
  name,
  id,
  label,
  ...rest
}) => {
  return (
    <div className={styles["checkbox-wrapper-1"]}>
      <input
        className={styles["substituted"]}
        type="checkbox"
        aria-hidden="true"
        name={name}
        id={id}
        {...rest}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
