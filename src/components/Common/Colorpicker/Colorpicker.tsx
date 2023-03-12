
import React, { useState } from "react";
import Image from "next/image";
import styles from "./colorpicker.module.css";
import "react-color-palette/lib/css/styles.css";
import ColorpickerContainer from "./ColorpickerContainer";
import { useColor } from "../../../hook/useColor";

const Colorpicker = () => {
  const [color, setColor] = useColor("hex", "#a8b0c6");
  const [isOpenColor, setIsOpenColor] = useState<boolean>(false);

  return (
    <main>
      <section className="flex items-center gap-2 h-10 relative">
        <div
          className={`border rounded-lg w-10 h-full border-[${color.hex}] `}
          style={{ background: color.hex }}
        />
        <div
          onClick={() => setIsOpenColor(!isOpenColor)}
          className="text-sm cursor-pointer border-2 border-gray-500 w-36 px-2 h-full flex items-center rounded-md "
        >
          {color.hex}
        </div>
        {isOpenColor && (
          <ColorpickerContainer color={color} onChange={setColor} />
        )}
      </section>
      <section className="flex gap-2 items-center flex-col justify-center">
        <Image
          placeholder="blur"
          src={`/sample.jpg`}
          blurDataURL={"data"}
          alt="img"
          width={200}
          height={200}
        />
        <div className="preview-div">컬러를 나타냅니다.</div>
      </section>
    </main>
  );
};

export default Colorpicker;
