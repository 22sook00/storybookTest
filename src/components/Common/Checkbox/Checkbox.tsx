import React, { FC } from "react";

interface CheckboxProps {
  text: string;
}
const Checkbox: FC<CheckboxProps> = ({ text }) => {
  return (
    <label htmlFor={text} className=" flex items-center select-none	">
      <input
        id={text}
        name={text}
        type="checkbox"
        className="formtick appearance-none h-6 w-6 border-solid border-2 border-gray-default rounded-md checked:bg-point-gr-light checked:border-transparent focus:outline-none"
      />
      <p className="ml-2">{text}</p>
    </label>
  );
};

export default Checkbox;
