import React, { FC } from "react";

interface CheckboxProps {
  text?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}
const Checkbox: FC<CheckboxProps> = ({
  text,
  disabled = false,
  size = "sm",
}) => {
  return (
    <label htmlFor={text} className=" flex items-center select-none	">
      <input
        id={text}
        name={text}
        type="checkbox"
        disabled={disabled}
        className={`
        ${size === "sm" ? "h-5 w-5" : size === "md" ? "h-6 w-6" : "h-7 w-7"}
        ${disabled ? "checked:bg-gray-600" : "checked:bg-point-gr-light"}
        formtick appearance-none border-solid border-2 border-gray-dark rounded-md 
         checked:border-transparent focus:outline-none`}
      />
      <p
        className={`
        ${
          size === "sm"
            ? " ml-1 text-sm"
            : size === "md"
            ? " ml-1  text-default"
            : " ml-2 text-lg"
        }
        ${disabled ? "text-primary-tint" : "text-black-dark"}`}
      >
        {text}
      </p>
    </label>
  );
};

export default Checkbox;
