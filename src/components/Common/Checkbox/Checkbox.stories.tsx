import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Checkbox from "./Checkbox";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Checkbox",
  component: Checkbox,
  control: { type: "boolean" },
  decorators: [withKnobs],
};

export const checkbox = () => {
  return (
    <div>
      <h2>Checkbox</h2>
      <div className="mt-4 default-flex justify-start gap-4">
        <Checkbox />
        <Checkbox size="md" />
        <Checkbox size="lg" />
      </div>
    </div>
  );
};

checkbox.story = {
  name: "Default",
};

export const disabled = () => {
  const label = text("text", "라벨이름");
  const disabled = boolean("visible", true);
  return <Checkbox disabled={disabled} text={label} />;
};
export const withLabelCheckbox = () => {
  const label = text("text", "라벨이름");
  return (
    <div>
      <h2>Checkbox</h2>
      <div className="mt-4 default-flex justify-start gap-4">
        <Checkbox text={label} />
        <Checkbox text={label} size="md" />
        <Checkbox text={label} size="lg" />
      </div>
    </div>
  );
};
