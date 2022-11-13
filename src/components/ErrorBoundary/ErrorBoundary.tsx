import React, { FC } from "react";
interface InputErrorProps {
  errTxt?: string | boolean;
  confirmTxt?: boolean;
}

const InputError: FC<InputErrorProps> = ({ errTxt, confirmTxt }) => {
  return (
    <p
      className={`text-xs text-left ${
        confirmTxt ? "text-green-600" : "text-error-color"
      } `}
    >
      {errTxt}
    </p>
  );
};

export default InputError;
