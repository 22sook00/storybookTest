import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Skeleton from "./Skeleton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Loadings",
  component: Skeleton,
  decorators: [withKnobs],
};
export const skeleton = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["sm", "md", "lg"], "md");
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const customStyle = text("customStyle", "");

  return <Skeleton />;
};

skeleton.story = {
  name: "Skeleton",
};

//export const primaryButton = () => {
//  return (
//    <Button theme="primary" size="sm">
//      PRIMARY
//    </Button>
//  );
//};

//export const secondaryButton = () => {
//  return (
//    <Button theme="secondary" size="sm">
//      SECONDARY
//    </Button>
//  );
//};

//export const tertiaryButton = () => {
//  return (
//    <Button theme="tertiary" size="sm">
//      TERTIARY
//    </Button>
//  );
//};
