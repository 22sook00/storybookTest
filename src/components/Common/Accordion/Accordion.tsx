import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, useCallback, useState } from "react";
import { accordionDummy } from "./accordionDummy";

type AccordionProps = {
  title: string;
  content: string;
  //isIcon?: boolean;
  customIcon?: React.ReactNode;
  //i: number;
  value: string | undefined;
  onChange: any;
  disabled?: boolean;
  animation?: "fade" | "slide";
  desc?: string;
};

const Accordion: FC<AccordionProps> = ({
  title,
  content,
  //isIcon = true,
  customIcon,
  value,
  onChange,
  disabled = false,
  animation,
  desc,
}) => {
  const handleToggle = (title: string) => {
    if (title === value) {
      return onChange(null);
    }
    onChange(title);
  };
  return (
    <div className=" mb-2 flex-col w-full bg-gray-light p-2">
      <div
        className="flex justify-between cursor-pointer transition-all rounded p-2"
        onClick={() => handleToggle(title)}
      >
        <div>
          <h4 className=" text-black-light font-medium">{title}</h4>
          {desc && (
            <p className=" font-NotoSansKR font-medium mt-1 text-sm text-gray-dark">
              {desc}
            </p>
          )}
        </div>
        {customIcon ? (
          <>{customIcon}</>
        ) : (
          <>
            {value === title ? (
              <ChevronDownIcon className="w-5 h-5" />
            ) : (
              <ChevronUpIcon className="w-5 h-5" />
            )}
          </>
        )}
      </div>
      <div
        className={`${
          value === title
            ? `transition-all opacity-100 overflow-auto will-change-scroll rounded-sm bg-white h-auto max-h-[900px] 
            py-3 text-black-default`
            : "h-0 max-h-0 overflow-hidden  opacity-0"
        }  leading-6 px-3 text-sm tracking-wide`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
