import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, useCallback, useState } from "react";
import { accordionDummy } from "./accordionDummy";

interface AccordionProps {
  title: string;
  content: string;
  isIcon?: boolean;
  customIcon?: React.ReactNode;
  //i: number;
  value: string | undefined;
  onChange: any;
}

const Accordion: FC<AccordionProps> = ({
  title,
  content,
  isIcon = true,
  customIcon,
  value,
  onChange,
  //i,
}) => {
  //const [selected, setSelected] = useState<number | null>(null);
  const handleToggle = (title: string) => {
    if (title === value) {
      return onChange(null);
    }
    onChange(title);
  };
  return (
    //<div className="default-flex">
    //  <div className={`w-[500px]`}>
    //    {accordionDummy.map((item, i) => {
    //      return (
    //        <div key={i}>
    //          <div className="bg-gray-light mb-2 p-2">
    //            <div
    //              className="flex justify-between cursor-pointer transition-all bg-gray-default rounded  p-2"
    //              onClick={() => handleToggle(i)}
    //            >
    //              <h4 className="font-bold">{item.title}</h4>
    //              {selected === i ? (
    //                <ChevronDownIcon className="w-5 h-5" />
    //              ) : (
    //                <ChevronUpIcon className="w-5 h-5" />
    //              )}
    //            </div>
    //            <div
    //              className={`${
    //                selected === i
    //                  ? "h-auto max-h-[900px] animate-showmodal-bg my-3  text-primary-light"
    //                  : "max-h-0 overflow-hidden"
    //              } px-3 text-sm tracking-wide `}
    //            >
    //              {item.content}
    //            </div>
    //          </div>
    //        </div>
    //      );
    //    })}
    //  </div>
    //</div>
    <div className="bg-gray-light mb-2 p-2">
      <div
        className="flex justify-between cursor-pointer transition-all bg-gray-default rounded  p-2"
        onClick={() => handleToggle(title)}
      >
        <h4 className="font-bold">{title}</h4>
        {value === title ? (
          <ChevronDownIcon className="w-5 h-5" />
        ) : (
          <ChevronUpIcon className="w-5 h-5" />
        )}
      </div>
      <div
        className={`${
          value === title
            ? "h-auto max-h-[900px] animate-showmodal-bg my-3  text-primary-light"
            : "max-h-0 overflow-hidden"
        } px-3 text-sm tracking-wide `}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
