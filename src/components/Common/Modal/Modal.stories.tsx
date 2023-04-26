import React, { FC, useCallback } from "react";
import useState from "storybook-addon-state";
import { withKnobs, text, boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Modal, { ModalProps } from "./Modal";
import Button from "../Buttons/Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Common/Modal",
  component: Modal,
  parameters: {
    docs: {
      componentSubtitle: "dialog 컴포넌트",
      inlineStories: false,
    },
  },
  decorators: [withKnobs],
};

export const modal = ({ onClose }: any) => {
  const title = text("title", "회원가입");
  const desc = text("desc", "가입을 통해 더 다양한 서비스를 만나보세요!");
  const blur = boolean("blur", false);
  const size = select("size", ["sm", "md", "lg"], "md");

  // eslint-disable-next-line react-hooks/rules-of-hooks
  //const [isOpenModal, setIsOpenModal] = useState<any>("click", false);

  return (
    <>
      <Modal
        title={title}
        desc={desc}
        blur={blur}
        size={size}
        //setIsOpenModal={setIsOpenModal}
        onClose={action(onClose())}
      >
        <div>내용</div>
      </Modal>
      {/*)}*/}
    </>
  );
};

modal.story = {
  name: "Default",
};

//export const cancellable = () => {
//  return (
//    <Modal title="포스트 삭제" desc="포스트를 정말로 삭제하시겠습니까?">
//      <div>내용</div>
//    </Modal>
//  );
//};

//export const customContent = () => {
//  return <Modal hideButtons>Custom Content</Modal>;
//};
