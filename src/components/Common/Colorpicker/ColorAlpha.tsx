import React, { useMemo } from "react";
import {
  AlphaProps,
  InteractiveOnChangeProps,
} from "../../../interface/colorpicker";
import { getAlphaCoordinates } from "../../../utils/coordinate";
import { toColor } from "../../../utils/toColor";
import ColorInteractive from "./ColorInteractive";

const ColorAlpha = ({
  width,
  color,
  onChange,
  onChangeComplete,
}: AlphaProps): JSX.Element => {
  const position = useMemo(() => {
    const x = getAlphaCoordinates(color.hsv.a ?? 1, width);

    return x;
  }, [color.hsv.a, width]);

  const updateColor = ({ x, complete }: InteractiveOnChangeProps): void => {
    const newColor = toColor("hsv", { ...color.hsv, a: x / width });

    onChange(newColor);

    if (complete && onChangeComplete) onChangeComplete(newColor);
  };

  const rgb = useMemo(
    () => `${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}`,
    [color.rgb]
  );
  const rgba = useMemo(() => `${rgb}, ${color.rgb.a ?? 1}`, [rgb, color.rgb.a]);

  const positionX = useMemo(() => -position - 2, [position]);

  return (
    <ColorInteractive
      className="rcp-alpha"
      onChange={updateColor}
      style={{
        width: { width },
        background: `linear-gradient(to right, rgba(${rgb}, 0), rgba(${rgb}, 1)) top left / auto auto,
              conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) top left / 12px 12px
              repeat`,
      }}
    >
      <div
        className="rcp-alpha-cursor"
        style={{
          left: position,
          background: `linear-gradient(to right, rgba(${rgba}), rgba(${rgba})) top left / auto auto,
                conic-gradient(#666 0.25turn, #999 0.25turn 0.5turn, #666 0.5turn 0.75turn, #999 0.75turn) ${positionX}px 2px / 12px 12px
                repeat`,
        }}
      />
    </ColorInteractive>
  );
};

export default ColorAlpha;
