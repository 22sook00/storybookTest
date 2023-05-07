import React, {
  useState,
  createRef,
  FC,
  useCallback,
  useMemo,
  useRef,
  useEffect,
} from "react";
import { getTooltipPosition } from "../../../utils/tooltip";
import { dummy } from "./data";

export interface positionDummyProps {
  id: number;
  item: string;
  belongTo: string;
}
interface positionProps {
  children?: React.ReactNode;
  tooltip?: string;
}

const Tooltip: FC<positionProps> = () => {
  const tooltipRef = useMemo(
    () => Array.from({ length: dummy.length }).map(() => createRef()),
    []
  ) as any;

  const container = useRef<HTMLDivElement>(null);
  const handleHover = useCallback(
    (list: positionDummyProps, clientX: number) => {
      const idx = list.id - 1;
      const type = list.item;
      if (!container.current) return;

      const tooltip = tooltipRef[idx].current;
      const { left, top } = getTooltipPosition(
        container.current,
        tooltipRef[idx].current,
        type,
        8
      );
      tooltip.style.opacity = 1;
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
    },
    [tooltipRef]
  );

  const handleMouseOver = (list: positionDummyProps) => {
    const idx = list.id - 1;
    tooltipRef[idx].current.style.opacity = 0;
  };

  const handleScroll = () => {
    return dummy.map((el) => {
      const idx = el.id - 1;
      tooltipRef[idx].current.style.opacity = 0;
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="default-flex flex-col gap-10 pb-10">
      <section className="w-full default-flex ">
        <div className=" w-[500px] h-[260px] shadow-md overflow-y-scroll p-5 rounded-lg">
          <section className="grid gap-4 grid-cols-3" ref={container}>
            {dummy.map((list: positionDummyProps) => {
              return (
                <div
                  key={list.id}
                  className="relative h-[120px] cursor-pointer rounded-lg default-flex flex-col shadow-sm hover:shadow-lg "
                  onMouseLeave={() => {
                    handleMouseOver(list);
                  }}
                  onMouseEnter={({ clientX }) => handleHover(list, clientX)}
                >
                  <>{list.item}</>
                  <div
                    style={{ opacity: 0 }}
                    className="fixed rounded bg-black-light text-sm default-flex flex-col text-gray-light w-fit py-1 px-4"
                    ref={tooltipRef[list.id - 1]}
                  >
                    {list.item}
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </section>
    </div>
  );
};

export default Tooltip;
