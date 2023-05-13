import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import useClickOutside from "../../hook/useClickOutside";

export type DialogProps = {
  visible?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancel?: () => void;
  onConfirm?: () => void;
  dimmed?: boolean;
  size?: "sm" | "md" | "lg";
  blur?: boolean;
};
const Dialog = ({
  title,
  description,
  hideButtons,
  cancellable,
  cancelText = "취소",
  confirmText = "확인",
  children,
  onCancel,
  onConfirm,
  dimmed = true,
  blur = true,

  size = "sm",
}: DialogProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = () => {
    onCancel && onCancel();
    document.body.classList.remove("open-modal");
  };
  useClickOutside(modalRef, handleClickOutside);
  useEffect(() => {
    document.body.classList.add("open-modal");
  }, []);

  const modalSize =
    size === "sm"
      ? "max-w-[400px] min-h-[200px]"
      : size === "md"
      ? "max-w-[620px] min-h-[400px]"
      : "max-w-[800px] min-h-[500px]";

  return (
    <section
      className={`
      ${blur && "backdrop-blur-sm"}  sm:flex-none
      animate-showmodal-bg fixed top-0 left-0 z-50 w-full h-full overflow-auto default-flex bg-black-dark/70`}
    >
      <div
        className={`
        ${dimmed ? "sm:max-w-[unset] sm:h-full " : "sm:mx-4"}
        ${modalSize} animate-showmodal-box flex flex-col justify-between bg-white shadow-md p-6 box-border w-full rounded-md`}
        ref={modalRef}
      >
        <header className="w-full">
          <nav className="w-full h-fit flex justify-between items-center mb-2 box-border ">
            <h3 className="font-bold text-black-dark text-xl mb-1">{title}</h3>
            <XMarkIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              onClick={handleClickOutside}
            />
          </nav>
          {description && (
            <p className="text-sm text-black-light mb-2">{description}</p>
          )}
        </header>
        <article
          className={`w-full mb-[15px] ${hideButtons && "min-h-[100px]"}`}
        >
          {children}
        </article>
        {!hideButtons && (
          <section className="default-flex justify-end">
            {cancellable && (
              <Button
                size={dimmed ? undefined : "sm"}
                customStyle={`${dimmed && "sm:w-full sm:py-2"}`}
                theme="tertiary"
                onClick={handleClickOutside}
              >
                {cancelText}
              </Button>
            )}
            <Button
              size={dimmed ? undefined : "sm"}
              customStyle={`${dimmed && "sm:w-full sm:py-2"}`}
              theme="primary"
              onClick={handleClickOutside}
            >
              {confirmText}
            </Button>
          </section>
        )}
      </div>
    </section>
  );
};

export default Dialog;
