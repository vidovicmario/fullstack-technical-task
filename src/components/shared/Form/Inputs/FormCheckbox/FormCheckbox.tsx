import React, { Dispatch, ReactNode, SetStateAction } from "react";
import "./FormCheckbox.scss";

interface InputProps {
  label: ReactNode;
  value: boolean;
  disabled?: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

export const FormCheckbox = ({ label, value, onChange, disabled = false }: InputProps) => {
  const handleOnChange = () => {
    onChange((old) => !old);
  };

  return (
    <div className="checkbox-wrap">
      <input
        className="checkbox"
        type="checkbox"
        checked={value}
        disabled={disabled}
        onChange={handleOnChange}
      />
      <span className="checkbox-span">{label}</span>
    </div>
  );
};
