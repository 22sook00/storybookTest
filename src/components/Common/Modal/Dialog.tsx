import React from "react";
import { useTransition, animated } from "react-spring";
import Button from "../Buttons/Button";
export type DialogProps = {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};
const Dialog = ({
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText = "취소",
  confirmText = "확인",
  children,
  onCancel,
  onConfirm,
}: DialogProps) => {
  if (!visible) return null;
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full z-10 bg-gray-900/40"></div>
      <div className="fixed top-0 left-0 w-full h-full z-20 default-flex">
        <div className="box-border rounded-md w-[25rem] bg-white shadow-md p-[2rem]">
          {title && (
            <h3 className="font-bold text-black-dark text-xl mb-1">
              {title}
            </h3>
          )}
          {description && <p className=" text-black-light">{description}</p>}
          {children}
          {!hideButtons && (
            <section className="default-flex mt-10 justify-end">
              {cancellable && (
                <Button size="sm" theme="tertiary" onClick={onCancel}>
                  {cancelText}
                </Button>
              )}
              <Button size="sm" theme="primary" onClick={onConfirm}>
                {confirmText}
              </Button>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialog;
