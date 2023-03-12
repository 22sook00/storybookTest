import React, { FC } from "react";

import { ColorPickerProps } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import ColorHue from "./ColorHue";
import ColorPalette from "./ColorPalette";
import ColorField from "./ColorField";
import ColorAlpha from "./ColorAlpha";
import ColorEyedropper from "./ColorEyedropper";

const ColorpickerContainer: FC<ColorPickerProps> = ({
  width = 200,
  height = width,
  color,
  onChange,
  onChangeComplete,
  hideHEX = false,
  hideRGB = false,
  hideHSV = false,
  alpha = true,
  dark = false,
}) => {
  //padding 값 16픽셀 *2 를 더해준다.
  const colorpickerWidth =
    width === 160 ? "w-[212px]" : width === 200 ? `w-[254px]` : "w-[292px]";
  return (
    <div
      className={`${colorpickerWidth} flex flex-col gap-2 p-4  
      ${
        dark
          ? "bg-background-blue-dark text-background-gray-light"
          : "bg-background-gray-light"
      }`}
    >
      <section className={`flex gap-2 items-center rounded-lg `}>
        <ColorPalette
          width={width}
          height={height}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
        <ColorHue
          width={width - 40}
          height={height}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      </section>
      <section className="">
        {alpha && (
          <ColorAlpha
            width={width - 40}
            color={color}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        )}
      </section>

      <section>
        <ColorEyedropper onChange={onChange} />
      </section>

      <section
        className={`flex flex-col items-center justify-center box-border w-full`}
      >
        <ColorField
          color={color}
          hideHEX={hideHEX}
          hideRGB={hideRGB}
          hideHSV={hideHSV}
          alpha={alpha}
          onChange={onChange}
        />
      </section>
    </div>
  );
};

export default ColorpickerContainer;
