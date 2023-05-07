import React, { FC, useEffect, useState } from "react";
import moment from "moment";
import { Dot } from "./Dot";
import { allDataProps } from "./defaultData";

interface CalendarItemProps {
  day: any;
  type: string;
  idx: number;
  changeMonthHandler: any;
  allData?: allDataProps[];
  list?: any;
}

const CalendarItem: FC<CalendarItemProps> = ({
  day,
  type,
  idx,
  changeMonthHandler,
  allData,
}) => {
  const [days, setDays] = useState<any>([]);
  const dayFormat = moment(day).format("YYYYMMDD");
  //달 수로 끊어서 데이터 보내기. 월별 데이터 가져오기.

  useEffect(() => {
    const filtering = allData?.filter(
      (el) => moment(el.createdAt).format("YYYYMMDD") === dayFormat
    );
    setDays({ ...day, types: filtering });
  }, [allData, day, dayFormat]);

  const textColorByDay =
    idx === 0
      ? "text-point-red-dark"
      : idx === 6
      ? "text-point-blue-dark"
      : "text-black-light";

  const dayColorByType =
    type === "today"
      ? "bg-background-gray font-extrabold"
      : type === "focus"
      ? "bg-black-dark text-white"
      : type === "not-cur-month"
      ? "text-gray-dark"
      : "";

  return (
    <div
      className={`text-center  flex flex-col items-center justify-center leading-12 cursor-pointer ${textColorByDay}`}
      onClick={() => changeMonthHandler(day)}
    >
      <div
        className={`${dayColorByType} rounded-lg w-8 h-8 flex  items-center justify-center mb-1 `}
      >
        {day.format("D").toString()}
      </div>
      <div className="flex gap-[2px] mb-2">
        {days.types?.map((list: { order: number }, idx: number) => {
          return (
            <div key={idx}>
              <Dot order={list.order} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarItem;
