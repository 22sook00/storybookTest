import React, {
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from "react";
import moment from "moment";
import CalendarHeader from "../../components/Common/Calendar/CalendarHeader";
import CalendarDayOfWeek from "../../components/Common/Calendar/CalendarDayOfWeek";
import CalendarItem from "../../components/Common/Calendar/CalendarItem";
import { dayStyles } from "../../utils/calendar";
import { allData } from "../../components/Common/Calendar/defaultData";

interface CalendarType {
  //allData: allDataProps[];
  size?: "sm" | "md" | "lg" | "full";
  setSelectDate?: Dispatch<SetStateAction<string>>;
}

const Calendar: FC<CalendarType> = ({
  //allData,
  size = "md",
  setSelectDate,
}) => {
  const [calendar, setCalendar] = useState<any>([]);
  const [value, setValue] = useState(moment());
  const [list, setList] = useState<any[]>([]);

  const valueFormat = moment(value).format("YYYYMMDD");
  const startDay = value.clone().startOf("month").startOf("week"); //전달 보여지는 마지막주
  const endDay = value.clone().endOf("month").endOf("week"); //다음달 보여지는 마지막주.

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day"); //전달 보여지는 마지막주의 하루전.
    const calendarArr = [] as any;
    // console.log('daydaydya',day.isBefore(endDay,'day')) //true 반환.->
    while (day.isBefore(endDay, "day")) {
      calendarArr.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(calendarArr);
  }, [value]);

  const changeMonthHandler = (month: React.SetStateAction<moment.Moment>) => {
    setValue(month);
    setSelectDate && setSelectDate(moment(month as any).format("YYYY.MM.DD"));
  };

  useEffect(() => {
    const filterValue = allData?.filter(
      (el: { createdAt: moment.MomentInput }) =>
        moment(el.createdAt).format("YYYYMMDD") === valueFormat
    );
    setList(filterValue);
  }, [valueFormat]);

  const calendarSize =
    size === "sm"
      ? "w-[300px] text-xs"
      : size === "md"
      ? "w-[400px] text-sm"
      : size === "lg"
      ? "w-[500px] text-default"
      : "w-full";

  //TODO date-range picker 구현해보기
  return (
    <>
      <section
        className={`${calendarSize} h-fit rounded-lg bg-white p-6 border border-gray-100 shadow-sm drop-shadow-sm `}
      >
        <CalendarHeader changeMonthHandler={changeMonthHandler} value={value} />
        <CalendarDayOfWeek />
        {calendar.map((week: any, idx: number) => {
          return (
            <div
              key={idx}
              className="grid grid-cols-7 mb-1 justify-between items-center"
            >
              {week.map((day: string, idx: number) => {
                const type = dayStyles(day, value);
                return (
                  <div key={idx}>
                    <CalendarItem
                      idx={idx}
                      day={day}
                      type={type}
                      allData={allData}
                      changeMonthHandler={changeMonthHandler}
                      list={list}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Calendar;
