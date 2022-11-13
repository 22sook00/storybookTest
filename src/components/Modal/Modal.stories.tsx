import React from "react";
import Modal from "./Modal";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Input from "../Input/Input";

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
  const title = text("title", "회원가입");
  const desc = text("desc", "가입을 통해 더 다양한 서비스를 만나보세요!");

  return (
    <Modal title={title} desc={desc} onClose={action("모달 닫아요!!")}>
      {/*<Input />*/}
    </Modal>
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
