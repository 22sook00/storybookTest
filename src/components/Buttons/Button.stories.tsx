import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

export default {
  title: "Common/Button",
  component: Button,
  decorators: [withKnobs],
};
export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["small", "medium", "big"], "medium");
  const theme = select(
    "theme",
    ["primary", "secondary", "tertiary"],
    "primary"
  );
  const disabled = boolean("disabled", false);
  const customStyle = text("customStyle", "");

  return (
    <Button
      size={size}
      theme={theme}
      disabled={disabled}
      customStyle={customStyle}
      onClick={action("클릭합니다!")}
    >
      {label}
    </Button>
  );
};

button.story = {
  name: "Default",
};

export const primaryButton = () => {
  return (
    <Button theme="primary" size="small">
      PRIMARY
    </Button>
  );
};

export const secondaryButton = () => {
  return (
    <Button theme="secondary" size="small">
      SECONDARY
    </Button>
  );
};

export const tertiaryButton = () => {
  return (
    <Button theme="tertiary" size="small">
      TERTIARY
    </Button>
  );
};

export const sizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <div className="mb-2">Small</div>
        <Button size="small" theme="primary">
          BUTTON
        </Button>
      </section>
      <section>
        <div className="mb-2">Medium</div>
        <Button size="medium" theme="primary">
          BUTTON
        </Button>
      </section>
      <section>
        <div className="mb-2">Big</div>
        <Button size="big" theme="primary">
          BUTTON
        </Button>
      </section>
    </div>
  );
};
//export const withIcon = () => {
//  return (
//    <div>
//      <ButtonGroup>
//        <Button size="small">
//          <Icon icon="heart" /> LIKE
//        </Button>
//        <Button>
//          <Icon icon="heart" /> LIKE
//        </Button>
//        <Button size="big">
//          <Icon icon="heart" /> LIKE
//        </Button>
//      </ButtonGroup>
//    </div>
//  );
//};
//export const iconOnly = () => {
//  return (
//    <div>
//      <ButtonGroup>
//        <Button iconOnly size="small">
//          <Icon icon="heart" />
//        </Button>
//        <Button iconOnly>
//          <Icon icon="heart" />
//        </Button>
//        <Button iconOnly size="big">
//          <Icon icon="heart" />
//        </Button>
//      </ButtonGroup>
//    </div>
//  );
//};
export const disabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <Button disabled size="small" theme="primary">
          {" "}
          PRIMARY
        </Button>
      </section>
      <section>
        <Button disabled size="small" theme="secondary">
          SECONDARY
        </Button>
      </section>
      <section>
        <Button disabled size="small" theme="tertiary">
          TERTIARY
        </Button>
      </section>
    </div>
  );
};

export const customSized = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Button customStyle="20rem">CUSTOM WIDTH</Button>
      </div>
      <div>
        <Button customStyle="w-[280px] h-[48px] bg-pink-400 text-pink-800">
          FULL WIDTH
        </Button>
      </div>
    </div>
  );
};
