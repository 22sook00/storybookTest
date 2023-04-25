import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import ColorDefinition from "./ColorDefinition";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/ColorDefinition",
  component: ColorDefinition,
  decorators: [withKnobs],
};
export const colorDefinition = () => {
  return <ColorDefinition />;
};
colorDefinition.story = {
  name: "Default",
};
