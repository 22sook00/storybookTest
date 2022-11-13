import React, { FC, SetStateAction } from "react";
import "./input.css";

interface InputProps {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
  name: string;
  placeholder?: string;
  type?: string;
  onKeyPress?: () => void;
}
const Input: FC<InputProps> = ({
  value,
  setValue,
  name,
  placeholder,
  type = "text",
  onKeyPress,
}) => {
  return (
    <input
      className="w-full h-12 px-[10px] box-border	border border-background-gray rounded-md"
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      onKeyPress={onKeyPress && onKeyPress}
      maxLength={onKeyPress && 13}
    />
  );
};

export default Input;
