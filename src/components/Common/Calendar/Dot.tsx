import React, { FC } from "react";
type DotType = {
  order: number;
};

export const Dot: FC<DotType> = ({ order }) => {
  return (
    <div
      className={`w-1 h-1 rounded-full ${
        order === 1
          ? "bg-point-blue"
          : order === 2
          ? "bg-point-red-light"
          : order === 3
          ? " bg-point-gr"
          : ""
      }`}
    />
  );
};
