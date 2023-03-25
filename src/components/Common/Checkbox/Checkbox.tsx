import React, { FC } from "react";

interface CheckboxProps {
  text: string;
}
const Checkbox: FC<CheckboxProps> = ({ text }) => {
  return (
    <label htmlFor={text} className=" flex items-center select-none	">
      <input type="checkbox" id={text} name={text} />
      <p className="ml-2">{text}</p>
    </label>
  );
};

export default Checkbox;
