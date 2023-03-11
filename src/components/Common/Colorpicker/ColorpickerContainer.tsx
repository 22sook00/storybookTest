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
  <div className={`rcp ${dark ? "rcp-dark" : "rcp-light"}`} style={{ width }}>
    <ColorPalette
      width={width}
      height={height}
      color={color}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
    />
    <ColorHue
      //width={width - 40}
      //height={height - 40}
      height={height}
      color={color}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
    />

    <div className="rcp-body">
      {alpha && (
        <ColorAlpha
          width={width - 40}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      )}
      <ColorField
        color={color}
        hideHEX={hideHEX}
        hideRGB={hideRGB}
        hideHSV={hideHSV}
        alpha={alpha}
        onChange={onChange}
      />
    </div>
  </div>
);
export default ColorPickerContainer;
