import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { accordionDummy } from "./accordionDummy";

const Accordion = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const handleToggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="default-flex">
      <div className={`w-[500px]`}>
        {accordionDummy.map((item, i) => {
          return (
            <div key={i}>
              <div className="bg-gray-light mb-2 p-2">
                <div
                  className="flex justify-between cursor-pointer transition-all bg-gray-default rounded  p-2"
                  onClick={() => handleToggle(i)}
                >
                  <h4 className="font-bold">{item.title}</h4>
                  {selected === i ? (
                    <ChevronDownIcon className="w-5 h-5" />
                  ) : (
                    <ChevronUpIcon className="w-5 h-5" />
                  )}
                </div>
                <div
                  className={`${
                    selected === i
                      ? "h-auto max-h-[900px] animate-showmodal-bg my-3  text-primary-light"
                      : "max-h-0 overflow-hidden"
                  } px-3 text-sm tracking-wide `}
                >
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
