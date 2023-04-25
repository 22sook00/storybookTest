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
  disabled?: boolean;
  animation?: "fade" | "slide";
  desc?: string;
}

const Accordion: FC<AccordionProps> = ({
  title,
  content,
  isIcon = true,
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
          <h4 className=" font-medium">{title}</h4>
          {desc && (
            <p className=" font-light mt-1 text-sm text-black-light">{desc}</p>
          )}
        </div>
        {isIcon && (
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
            ? "rounded-sm bg-white h-auto max-h-[900px] animate-showmodal-bg py-3  text-black-light"
            : "max-h-0 overflow-hidden"
        } leading-6 px-3 text-sm tracking-wide`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
