import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Calendar from "./Calendar";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Calendar",
  component: Calendar,
  decorators: [withKnobs],
};
export const button = () => {
  const size = select("size", ["sm", "md", "lg"], "md");

  return <Calendar size={size} />;
};

button.story = {
  name: "Default",
};
