import React, { FC, SetStateAction } from "react";
//import "./modal.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Line from "../Line/Line";

export interface ModalProps {
  title?: string;
  desc?: string;
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  hideButtons?: boolean;
  isCard?: boolean;
  icon?: React.ReactNode;
}

const Modal: FC<ModalProps> = ({
  title,
  desc,
  onClose,
  children,
  onClick,
  hideButtons,
  isCard,
  icon,
}) => {
  return (
    <section className="flex-col justify-center items-center fixed top-0 right-0 left-0 bottom-0 z-50 bg-modal-bg animate-showmodalBg flex ">
      <div className="bg-white rounded-[8px] animate-showmodalBox flex flex-col justify-center items-center py-10 box-border m-auto w-[90%] max-w-[500px]">
        <header>
          <nav className="w-full h-fit flex justify-between items-center mb-[6px] box-border px-10">
            <h2 className="text-2xl font-bold">{title}</h2>
            <XMarkIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              onClick={onClose}
            />
          </nav>
          {desc && <p className="mb-10 text-sm">{desc}</p>}
        </header>
        <Line />
        <div className="text-center mb-[15px]">{children}</div>
      </div>
    </section>
  );
};

export default Modal;
