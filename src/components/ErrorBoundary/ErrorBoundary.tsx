import React, { FC } from "react";
interface InputErrorProps {
  errTxt?: string | boolean;
  confirmTxt?: boolean;
}

const InputError: FC<InputErrorProps> = ({ errTxt, confirmTxt }) => {
  return (
    <p
      className={`text-xs text-left ${
        confirmTxt ? "text-point-gr" : "text-point-red"
      } `}
    >
      {errTxt}
    </p>
  );
};

export default InputError;
