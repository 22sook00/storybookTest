import React, { FC } from "react";
import moment from "moment";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface CalendarHeaderProps {
  value: any;
  changeMonthHandler: any;
}

const CalendarHeader: FC<CalendarHeaderProps> = ({
  value,
  changeMonthHandler,
}) => {
  const curYear = () => {
    return value.format("YYYY");
  };
  const curMonth = () => {
    return value.format("MM");
  };
  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };
  const nextMonth = () => {
    return value.clone().add(1, "month");
  };
  const thisMonth = () => {
    return moment();
  };
  return (
    <div className="flex items-center justify-between text-sm">
      <div className="flex gap-4 h-fit items-center">
        <button
          className="p-1 w-5 h-5 rounded-lg bg-gray-default"
          onClick={() => changeMonthHandler(prevMonth())}
        >
          <ChevronLeftIcon />
        </button>
        <p className="font-bold">
          {curYear()}.{curMonth()}
        </p>
        <button
          className="p-1 w-5 h-5 rounded-lg bg-gray-default"
          onClick={() => changeMonthHandler(nextMonth())}
        >
          <ChevronRightIcon />
        </button>
      </div>
      <button
        className="text-xs w-fit p-2 rounded-lg bg-gray-default font-bold"
        onClick={() => changeMonthHandler(thisMonth())}
      >
        이번달
      </button>
    </div>
  );
};

export default CalendarHeader;
