import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Tooltip from "./Tooltip";
import React, { FC, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Tooltip",
  component: Tooltip,
  decorators: [withKnobs],
};
export const tooltip = () => {
  const size = select("size", ["sm", "md", "lg"], "md");
  const disabled = boolean("disabled", false);
  const withInput = boolean("withInput", false);
  const isEyedropper = boolean("isEyedropper", false);
  return (
    <div className="flex gap-3 px-4">
      <section>
        <Tooltip />
      </section>
    </div>
  );
};
tooltip.story = {
  name: "Default",
};
