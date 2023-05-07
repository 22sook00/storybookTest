import React from "react";
import Dialog from "./Dialog";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Dialog",
  component: Dialog,
  control: { type: "boolean" },
  parameters: {
    docs: {
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const dialog = () => {
  const title = text("title", "결제 성공");
  const description = text("description", "결제가 성공적으로 이루어졌습니다.");
  const confirmText = text("confirmText", "확인");
  const cancelText = text("cancelText", "취소");
  const size = select("size", ["sm", "md", "lg"], "md");
  const dimmed = boolean("dimmed", true);
  const blur = boolean("blur", true);

  return (
    <Dialog
      title={title}
      size={size}
      blur={blur}
      dimmed={dimmed}
      hideButtons={false}
      description={description}
      confirmText={confirmText}
      cancelText={cancelText}
      cancellable={false}
    />
  );
};

dialog.story = {
  name: "Default",
};

export const cancellable = () => {
  return (
    <Dialog
      title="포스트 삭제"
      description="포스트를 정말로 삭제하시겠습니까?"
      confirmText="삭제"
      cancellable
    />
  );
};

export const customContent = () => {
  const hideButtons = boolean("hideButtons", true);
  return <Dialog hideButtons={hideButtons}>버튼이 없는 카드모달</Dialog>;
};
