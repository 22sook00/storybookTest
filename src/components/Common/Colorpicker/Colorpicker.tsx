import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
//import sampleImg from "../../../../public/sample.jpg";
import styles from "./colorpicker.module.css";
import "react-color-palette/lib/css/styles.css";
import ColorpickerContainer from "./ColorpickerContainer";
import { useColor } from "../../../hook/useColor";

const Colorpicker = () => {
  const [color, setColor] = useColor("hex", "#a8b0c6");
  const [isOpenColor, setIsOpenColor] = useState<boolean>(false);

  return (
    <main className="grid grid-cols-2 gap-2 border-2 border-gray-500">
      <div
        className={`border rounded-full w-10 h-10 border-[${color.hex}]`}
        style={{ background: color.hex }}
      />
      <input value={color.hex} onClick={() => setIsOpenColor(!isOpenColor)} />
      {isOpenColor && (
        <section className="picker-section ">
          <ColorpickerContainer
            alpha={true}
            color={color}
            onChange={setColor}
            width={200}
            height={200}
          />
        </section>
      )}
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
