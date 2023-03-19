import React from "react";
import { dayOfWeek } from "./defaultData";

const CalendarDayOfWeek = () => {
  return (
    <div className="flex justify-between gap-2 mt-6 mb-4">
      {dayOfWeek.map((day, idx) => {
        return (
          <div
            key={idx}
            className={`${
              idx === 0
                ? "text-primary-red"
                : idx === 6
                ? "text-blue-dark-tag"
                : "text-dark-text"
            } flex-1 w-[calc(100% / 7)] cursor-pointer my-2 leading-12 font-bold text-sm box-border text-center`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
};

export default CalendarDayOfWeek;
