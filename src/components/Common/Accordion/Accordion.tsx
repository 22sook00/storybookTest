import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import React, { FC, useCallback, useState } from "react";
import { useUncontrolled } from "./useUncontrolled";
//import { accordionDummy } from "./accordionDummy";

interface AccordionProps {
  title: string;
  defaultValue?: string;
  content: string;
  //idx: number;
  isIcon?: boolean;
  customIcon?: React.ReactNode;
  setSelected?: any;
  selected?: any;
  onChange?: any;
}

const Accordion: FC<AccordionProps> = ({
  title,
  defaultValue,
  content,
  //idx,
  isIcon = true,
  customIcon,
  selected,
  setSelected,
}) => {
  //const [uncontrolledValue, handleChange] = useUncontrolled({
  //  title,
  //  defaultValue,
  //  onChange,
  //});
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue !== undefined ? defaultValue : ""
  );
  const handleUncontrolledChange = (val: any) => {
    setUncontrolledValue(val);
    //handleItemChange?.(val);
  };
  const isItemActive = (itemValue: string) =>
    Array.isArray(uncontrolledValue)
      ? uncontrolledValue.includes(itemValue)
      : itemValue === uncontrolledValue;

  const isActive = isItemActive(title);
  const handleItemChange = (itemValue: string) => {
    const nextValue = Array.isArray(uncontrolledValue)
      ? uncontrolledValue.includes(itemValue)
        ? uncontrolledValue.filter(
            (selectedValue) => selectedValue !== itemValue
          )
        : [...uncontrolledValue, itemValue]
      : itemValue === uncontrolledValue
      ? null
      : (itemValue as any);

    console.log("nextValue", nextValue);

    handleUncontrolledChange(nextValue);
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
        onClick={() => handleItemChange(title)}
      >
        <h4 className="font-bold">{title}</h4>
        {isActive ? (
          <ChevronDownIcon className="w-5 h-5" />
        ) : (
          <ChevronUpIcon className="w-5 h-5" />
        )}
      </div>
      <div
        className={`${
          isActive
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
