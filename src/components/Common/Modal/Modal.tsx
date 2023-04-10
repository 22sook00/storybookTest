import React, { FC, SetStateAction, useEffect, useRef } from "react";
import styles from "./modal.module.css";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Line from "../../Line/Line";
import useClickOutside from "../../../hook/useClickOutside";

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 *
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello` 와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정 할 수 있습니다.
 */

export interface ModalProps {
  title?: string;
  desc?: string;
  onClose?: () => void;
  isOpenModal?: boolean;
  setIsOpenModal?: React.Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
  isCard?: boolean;
  icon?: React.ReactNode;
  blur?: boolean;
  dimmed?: boolean;
  size?: "sm" | "md" | "lg";
}

const Modal: FC<ModalProps> = ({
  title,
  desc,
  onClose,
  children,
  isOpenModal,
  setIsOpenModal,
  isCard = false,
  blur = true,
  dimmed = true,
  size = "sm",
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = () => {
    setIsOpenModal && setIsOpenModal(false);
    document.body.classList.remove("open-modal");
  };
  useClickOutside(modalRef, handleClickOutside);
  useEffect(() => {
    document.body.classList.add("open-modal");
  }, []);

  const modalSize =
    size === "sm"
      ? "max-w-[500px] min-h-[200px]"
      : size === "md"
      ? "max-w-[620px] min-h-[400px]"
      : "max-w-[800px] min-h-[500px]";

  return (
    <section
      className={`${blur && "backdrop-blur-sm"} 
      sm:flex-none
      animate-showmodal-bg fixed top-0 left-0 z-50 w-full h-full overflow-auto default-flex bg-primary-default/40`}
    >
      <div
        className={`${
          dimmed && "sm:max-w-[unset] sm:h-full "
        } ${modalSize} sm:mx-4 animate-showmodal-box bg-white shadow-md p-6 box-border w-full rounded-md`}
        ref={modalRef}
      >
        <header className="w-full">
          <nav className="w-full h-fit flex justify-between items-center mb-2 box-border ">
            <h2 className="text-2xl font-bold">{title}</h2>
            <XMarkIcon
              style={{ width: "20px", height: "20px", cursor: "pointer" }}
              onClick={onClose}
            />
          </nav>
          {desc && <p className="text-sm">{desc}</p>}
        </header>
        <Line />
        <article className="w-full mb-[15px]">{children}</article>
      </div>
    </section>
  );
};

export default Modal;
