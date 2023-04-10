import React from "react";
import { withKnobs, text, select } from "@storybook/addon-knobs";
import Badge from "./Badge";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Badge",
  component: Badge,
  decorators: [withKnobs],
};
export const badge = () => {
  const badgetext = text("title", "뱃지뱃지");
  const color = text("color", "#22c0c8");
  const size = select("size", ["sm", "md", "lg"], "md");

  return <Badge text={badgetext} color={color} size={size} />;
};
badge.story = {
  name: "Default",
};
