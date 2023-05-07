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
  return <div className=" default-title capitalize">{title}</div>;
};
export const colorpicker = () => {
  const size = select("size", ["sm", "md", "lg"], "md");
  const disabled = boolean("disabled", false);
  const withInput = boolean("withInput", false);
  const isEyedropper = boolean("isEyedropper", false);

  return (
    <div className="flex gap-8 w-full shadow border p-4">
      <div>
        <Title title={"primary"} />
        <section className="p-4 w-fit flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
          <Colorpicker size={size} disabled={disabled} withInput={withInput} />
        </section>
      </div>
      <div>
        <Title title={"without eyeDropper"} />{" "}
        <section className="p-4 w-fit flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
          <Colorpicker
            size={size}
            isEyedropper={isEyedropper}
            withInput={withInput}
          />
        </section>
      </div>
    </div>
  );
};
colorpicker.story = {
  name: "Default",
};
export const sizes = () => {
  return (
    <div className="flex gap-3 px-4">
      <section className="p-4 flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
        <Title title={"small"} />
        <Colorpicker size="sm" withInput />
      </section>
      <section className="p-4 flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
        <Title title={"medium"} />
        <Colorpicker size="md" withInput />
      </section>
      <section className="p-4 flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
        <Title title={"large"} />
        <Colorpicker size="lg" withInput />
      </section>
    </div>
  );
};
export const disabled = () => {
  return (
    <section className="p-4 flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
      <Title title={"disabled input"} />
      <Colorpicker disabled withInput />
    </section>
  );
};
export const withInput = () => {
  return (
    <section className="p-4 flex flex-col gap-2 rounded border-2 border-dashed border-gray-default">
      <Title title={"with input"} />
      <Colorpicker withInput />
    </section>
  );
};
