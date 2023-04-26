import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import { InformationCircleIcon, LinkIcon } from "@heroicons/react/24/solid";
import {
  HeartIcon,
  KeyIcon,
  LanguageIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Button",
  component: Button,
  decorators: [withKnobs],
};
export const button = () => {
  const label = text("children", "BUTTON");
  const size = select("size", ["sm", "md", "lg"], "md");
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
    <Button theme="primary" size="sm">
      PRIMARY
    </Button>
  );
};

export const secondaryButton = () => {
  return (
    <Button theme="secondary" size="sm">
      SECONDARY
    </Button>
  );
};

export const tertiaryButton = () => {
  return (
    <Button theme="tertiary" size="sm">
      TERTIARY
    </Button>
  );
};

export const sizes = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <div className="mb-2">small</div>
        <Button size="sm" theme="primary">
          BUTTON
        </Button>
      </section>
      <section>
        <div className="mb-2">Medium</div>
        <Button size="md" theme="primary">
          BUTTON
        </Button>
      </section>
      <section>
        <div className="mb-2">Large</div>
        <Button size="lg" theme="primary">
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
//        <Button size="sm">
//          <LinkIcon className="w-4" />
//        </Button>
//        <Button>
//          <InformationCircleIcon className="w-4" />
//        </Button>
//        <Button size="lg">
//          <LifebuoyIcon className="w-4" />
//        </Button>
//      </ButtonGroup>
//    </div>
//  );
//};

export const disabled = () => {
  return (
    <div className="flex flex-col gap-4">
      <section>
        <Button disabled size="sm" theme="primary">
          {" "}
          PRIMARY
        </Button>
      </section>
      <section>
        <Button disabled size="sm" theme="secondary">
          SECONDARY
        </Button>
      </section>
      <section>
        <Button disabled size="sm" theme="tertiary">
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
        <Button customStyle=" bw-full h-[48px] bg-pink-400 text-pink-800 focus:ring-pink-200">
          customStyle Button
        </Button>
      </div>
    </div>
  );
};
