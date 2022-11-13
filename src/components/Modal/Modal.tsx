import React, { FC, SetStateAction } from "react";
import "./modal.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Line from "../Line/Line";

export interface ModalProps {
  title?: string;
  desc?: string;
  onClose?: () => void;
  onClick?: () => void;
  children?: React.ReactNode;
  hideButtons?: boolean;
}

const Modal: FC<ModalProps> = ({
  title,
  desc,
  onClose,
  children,
  onClick,
  hideButtons,
}) => {
  return (
    <section className="modal-background">
      <div className="modal-container">
        <header>
          <nav>
            <h2>{title}</h2>
            <XMarkIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              onClick={onClose}
            />
          </nav>
          {desc && <p>{desc}</p>}
        </header>
        <Line />
        <div className="modal-content-box">{children}</div>
      </div>
    </section>
  );
};

export default Modal;
