import React, { FC, useState } from "react";

interface ToggleProps {
  idx: number;
  selectedIDX: number | null;
}

const Toggle: FC<ToggleProps> = ({ selectedIDX, idx }) => {
  const [toggle, setToggle] = useState(false);
  const toggleClass = "transform translate-x-8";
  return (
    <div
      className={`${
        idx === selectedIDX ? "bg-point-blue-dark" : "bg-gray-default"
      } relative w-14 h-6 flex items-center  rounded-full p-1 cursor-pointer`}
      onClick={() => {
        setToggle(!toggle);
      }}
      //onClick={handleClickToggle}
    >
      <p
        className={`${
          toggle ? " text-gray-light left-6" : " text-primary-tint left-2 "
        } text-[10px] font-semibold absolute transform duration-300 ease-in-out`}
      >
        {toggle ? "ON" : "OFF"}
      </p>
      <div
        className={
          "bg-white h-4 w-4 rounded-full shadow-md  transform duration-300 ease-in-out" +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Toggle;
