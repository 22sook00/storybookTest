import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Colorpicker from "./Colorpicker";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Colorpicker",
  component: Colorpicker,
  decorators: [withKnobs],
};

export const colorpicker = () => {
  return <Colorpicker></Colorpicker>;
};
colorpicker.story = {
  name: "Default",
};
