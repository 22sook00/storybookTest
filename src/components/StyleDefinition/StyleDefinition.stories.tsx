import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import StyleDefinition from "./StyleDefinition";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/StyleDefinition",
  component: StyleDefinition,
  decorators: [withKnobs],
};
export const styleDefinition = () => {
  return <StyleDefinition />;
};
styleDefinition.story = {
  name: "Default",
};
