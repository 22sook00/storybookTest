import React from "react";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import {
  withKnobs,
  text,
  radios,
  boolean,
  number,
} from "@storybook/addon-knobs";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/ButtonGroup",
  component: ButtonGroup,
  decorators: [withKnobs],
};

export const buttonGroup = () => {
  const direction = radios(
    "direction",
    { Row: "flex-row", Column: "flex-col" },
    "row"
  );

  const gap = number("gap", 4);
  const align = radios(
    "align",
    { Start: "justify-start", Center: "justify-center", End: "justify-end" },
    "row"
  );
  return (
    <ButtonGroup direction={direction} align={align} gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

buttonGroup.story = {
  name: "Default",
};

export const rightAlign = () => {
  const align = radios(
    "align",
    { Start: "justify-start", Center: "justify-center", End: "justify-end" },
    "row"
  );
  return (
    <ButtonGroup align={align}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const column = () => {
  return (
    <ButtonGroup direction="flex-col">
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};

export const customGap = () => {
  const gap = number("gap", 4);
  return (
    <ButtonGroup gap={gap}>
      <Button theme="tertiary">취소</Button>
      <Button>확인</Button>
    </ButtonGroup>
  );
};

export const customGapColumn = () => {
  const gap = number("gap", 4);
  return (
    <ButtonGroup direction="flex-col" gap={gap}>
      <Button>CLICK ME</Button>
      <Button>CLICK ME</Button>
    </ButtonGroup>
  );
};
