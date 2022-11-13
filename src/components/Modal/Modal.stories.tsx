import React from "react";
import Modal from "./Modal";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

export default {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const modal = () => {
  const title = text("title", "결제 성공");
  const desc = text("desc", "결제가 성공적으로 이루어졌습니다.");

  return (
    <Modal title={title} desc={desc} onClose={action("모달 닫아요!!")}></Modal>
  );
};

modal.story = {
  name: "Default",
};

export const cancellable = () => {
  return <Modal title="포스트 삭제" desc="포스트를 정말로 삭제하시겠습니까?" />;
};

export const customContent = () => {
  return <Modal hideButtons>Custom Content</Modal>;
};
