import React, { FC } from "react";
type DotType = {
  order: number;
};

export const Dot: FC<DotType> = ({ order }) => {
  return (
    <div
      className={`w-1 h-1 rounded-full ${
        order === 1
          ? "bg-blue-tag"
          : order === 2
          ? "bg-pink-500"
          : order === 3
          ? " bg-green-tag"
          : ""
      }`}
    />
  );
};
