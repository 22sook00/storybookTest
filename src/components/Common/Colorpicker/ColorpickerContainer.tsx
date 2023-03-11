import React from "react";
import { ColorPickerProps } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import ColorHue from "./ColorHue";
import ColorPalette from "./ColorPalette";
import ColorField from "./ColorField";
import ColorAlpha from "./ColorAlpha";

const ColorPickerContainer = ({
  width,
  height = width,
  color,
  onChange,
  onChangeComplete,
  hideHEX = false,
  hideRGB = false,
  hideHSV = false,
  alpha = false,
  dark = false,
}: ColorPickerProps): JSX.Element => (
  <div className={`w-[${width}px] flex flex-col gap-2`}>
    <section
      className={`flex gap-2 items-center rounded-lg ${
        dark ? "bg-blue-dark" : "bg-bg-blue-light"
      }`}
    >
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
    <section>
      {alpha && (
        <ColorAlpha
          width={width - 40}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      )}
    </section>

    <section
      className={`flex flex-col items-center justify-center p-3 box-border w-full  `}
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
export default ColorPickerContainer;
