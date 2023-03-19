import React, {
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import "react-color-palette/lib/css/styles.css";
import ColorpickerContainer from "./ColorpickerContainer";
import { useColor } from "../../../hook/useColor";

interface colorpickerProps {
  setCurColor: React.Dispatch<SetStateAction<string>>;
}
const Colorpicker: FC<colorpickerProps> = ({ setCurColor }) => {
  const [color, setColor] = useColor("hex", "#a8b0c6");
  const [isOpenColor, setIsOpenColor] = useState<boolean>(false);

  useEffect(() => {
    setCurColor(color.hex);
  }, [color.hex, setCurColor]);
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
          <ColorpickerContainer
            color={color}
            onChange={setColor}
            isOpenColor={isOpenColor}
            setIsOpenColor={setIsOpenColor}
          />
        )}
      </section>
    </main>
  );
};

export default Colorpicker;
