import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Colorpicker from "./Colorpicker";
import React, { FC, useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Colorpicker",
  component: Colorpicker,
  decorators: [withKnobs],
};
const Title = ({ title }: any) => {
  return <div className=" capitalize mb-2 text-sm font-light">🎨 {title}</div>;
};
export const colorpicker = () => {
  const size = select("size", ["sm", "md", "lg"], "md");
  const disabled = boolean("disabled", false);
  const withInput = boolean("withInput", false);
  const isEyedropper = boolean("isEyedropper", false);

  return (
    <div className="flex gap-3 px-4">
      <section>
        <Title title={"Default"} />
        <Colorpicker size={size} disabled={disabled} withInput={withInput} />
      </section>
      <section>
        <Title title={"do not use eyeDropper"} />
        <Colorpicker
          size={size}
          isEyedropper={isEyedropper}
          withInput={withInput}
        />
      </section>
    </div>
  );
};
colorpicker.story = {
  name: "Default",
};
export const sizes = () => {
  return (
    <div className="flex gap-3 px-4">
      <section>
        <Title title={"small"} />
        <Colorpicker size="sm" withInput />
      </section>
      <section>
        <Title title={"medium"} />
        <Colorpicker size="md" withInput />
      </section>
      <section>
        <Title title={"large"} />
        <Colorpicker size="lg" withInput />
      </section>
    </div>
  );
};
export const disabled = () => {
  return (
    <section>
      <Title title={"disabled input"} />
      <Colorpicker disabled withInput />
    </section>
  );
};
export const withInput = () => {
  return (
    <section>
      <Title title={"with input"} />
      <Colorpicker withInput />
    </section>
  );
};
