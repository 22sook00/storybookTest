import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);
  const toggleClass = "transform translate-x-8";
  return (
    <div
      className={`${
        toggle ? "bg-point-blue-dark" : "bg-gray-default"
      } relative w-14 h-6 flex items-center  rounded-full p-1 cursor-pointer`}
      onClick={() => {
        setToggle(!toggle);
      }}
    >
      <p
        className={`${
          toggle ? " text-gray-light left-6" : " tetext-primary-tint left-2 "
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
