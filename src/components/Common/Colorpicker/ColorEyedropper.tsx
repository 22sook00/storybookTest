import React, { FC, useEffect, useState } from "react";
import { toColor } from "../../../utils/toColor";
import Button from "../Buttons/Button";
import { SaturationProps } from "./ColorPalette";

const ColorEyedropper: FC<Pick<SaturationProps, "onChange">> = ({
  onChange,
}) => {
  const handleOpenEyedropper = () => {
    const eyeDropper = new window.EyeDropper();
    const hasSupport = () => "EyeDropper" in window;

    if (!hasSupport) {
      alert("Your browser does not support the EyeDropper API");
      return;
    }
    eyeDropper
      .open()
      .then((result: { sRGBHex: string }) => {
        onChange(toColor("hex", result.sRGBHex));
      })
      .catch((e: any) => {
        onChange(toColor("hex", "black"));
      });
  };

  return (
    <div>
      <Button
        customStyle="w-full bg-primary-text text-white font-bold"
        onClick={handleOpenEyedropper}
      >
        Eyedropper
      </Button>
    </div>
  );
};

export default ColorEyedropper;
