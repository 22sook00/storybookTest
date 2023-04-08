import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Colorpicker from "./Colorpicker";
import React, { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Colorpicker",
  component: Colorpicker,
  decorators: [withKnobs],
};
// colorpicker의 props로 size 부터 표현해본다.
// size 스토리북을 완성하면 eyedropper 를 제외한것을 구현한다.

export const colorpicker = () => {
  const size = select("size", ["sm", "md", "lg"], "md");
  const disabled = boolean("disabled", false);
  const withInput = boolean("withInput", false);

  return (
    <section className="w-full border flex justify-center items-center">
      <Colorpicker size={size} disabled={disabled} withInput={withInput} />;
    </section>
  );
};
colorpicker.story = {
  name: "Default",
};
export const sizes = () => {
  return (
    <div className="flex gap-6 capitalize">
      <section>
        <div className="mb-2">small</div>
        <Colorpicker size="sm" />
      </section>
      <section>
        <div className="mb-2">Medium</div>
        <Colorpicker size="md" />
      </section>
      <section>
        <div className="mb-2">Large</div>
        <Colorpicker size="lg" />
      </section>
    </div>
  );
};
export const disabled = () => {
  return (
    <section>
      <div className="mb-2">Disabled</div>
      <Colorpicker disabled />
    </section>
  );
};
export const withInput = () => {
  return (
    <section>
      <div className="mb-2">withInput</div>
      <Colorpicker withInput />
    </section>
  );
};
