import React, { useEffect, useState } from "react";
import Image from "next/image";
//import sampleImg from "../../../../public/sample.jpg";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Colorpicker = () => {
  const [color, setColor] = useColor("hex", "#a8b0c6");
  const [isOpenColor, setIsOpenColor] = useState<boolean>(false);
  const [curColor, setCurColor] = useState("#a8b0c6");

  useEffect(() => {
    const curColor = color.hex;
    setCurColor(curColor);
  }, [color.hex, curColor]);

  return (
    <main className="grid grid-cols-2 gap-2 w-[450px]">
      <div
        className={`border rounded-full w-10 h-10 bg-[${curColor}] border-[${curColor}]`}
        //style={{ background: curColor }}
      />
      <input value={curColor} onClick={() => setIsOpenColor(!isOpenColor)} />
      {isOpenColor && (
        <section className="picker-section">
          <ColorPicker
            width={200}
            height={200}
            color={color}
            onChange={setColor}
            hideHSV
            alpha
            dark
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
