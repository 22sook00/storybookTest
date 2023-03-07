import React, { FC, SetStateAction, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PaginationProps {
  curIdx: number;
  total: number;
  setCurIdx: React.Dispatch<SetStateAction<number>>;
}
const Pagination: FC<PaginationProps> = ({ curIdx, total, setCurIdx }) => {
  const pages = [];
  //연속된 숫자는 5개까지 보여주도록 하고 그 이전, 이후에는 ... 으로 구분지어준다.
  if (total < 6) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    //curIdx가 5 이상일때부터 ...가 보여져야 하므로
    if (curIdx >= 5) {
      //반대로, 토탈수에서 현재수가 4보다 작으면 끝에서 숫자다섯개 전부표시, 1 이후는 ... 표시
      if (total - curIdx < 4) {
        pages.push(1);
        pages.push(<span key={"...1"}>...</span>);
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(<span key={"...2"}>...</span>);
        for (let i = curIdx - 2; i < curIdx + 3; i++) {
          pages.push(i);
        }
        pages.push(<span key={"...3"}>...</span>);
        pages.push(total);
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push(<span key={"...4"}>...</span>);
      pages.push(total);
    }
  }

  return (
    <div className="h-fit text-center my-20 flex items-center justify-center">
      <ChevronLeftIcon
        className={`w-6 h-6 cursor-pointer ${
          curIdx === 1 ? "text-[#d1d1d1] cursor-not-allowed" : ""
        }`}
        onClick={() => setCurIdx(curIdx - 1)}
      />
      <ul className="flex gap-[10px] mx-[50px]">
        {pages.map((page: any, idx) => {
          return (
            <li
              onClick={() => setCurIdx(page)}
              key={idx}
              className={` cursor-pointer w-6 h-6 pt-[3px] text-center text-xs
                ${
                  curIdx === page
                    ? " bg-point-background text-point-color rounded-full"
                    : "page-numbers"
                }
              `}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <ChevronRightIcon
        className={`w-6 h-6 ${
          curIdx === total ? "text-[#d1d1d1] cursor-not-allowed" : ""
        }`}
        onClick={() => setCurIdx(curIdx + 1)}
      />
    </div>
  );
};

export default Pagination;
