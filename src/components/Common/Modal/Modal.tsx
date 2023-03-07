import React, { FC, SetStateAction } from "react";
import styles from "./modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Line from "../../Line/Line";

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
    <section className={styles.modal_background}>
      <div className={styles.modal_container}>
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
