//import React from "react";
//import { Story, Meta } from "@storybook/react";
//import { withKnobs, text, select } from "@storybook/addon-knobs";
//import { within, userEvent } from "@storybook/testing-library";
//import { expect } from "@storybook/jest";

//import Test from "./TestPage";
//// eslint-disable-next-line import/no-anonymous-default-export
//export default {
//  title: "Pages/Test",
//  component: Test,
//  decorators: [withKnobs],
//  parameters: {},
//} as Meta;

//const Template: Story = () => <Test />;

//export const Default = Template.bind({});
//export const withModal = Template.bind({});
//withModal.play = async ({ canvasElement }) => {
//  const canvas = within(canvasElement);
//  const item = await canvas.findByText(/Cheeseburger/i);
//  await userEvent.click(item);
//  console.log("iti", item);
//  //await expect(canvas.getByTestId("modal")).toBeInTheDocument();
//};

import React from "react";
import Dialog from "./Dialog";

export default {
  title: "Common/Dialog",
  component: Dialog,
};

export const dialog = () => {
  return <Dialog />;
};

dialog.story = {
  name: "Default",
};
