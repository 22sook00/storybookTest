import React, {
  FC,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

type PaginationProps = {
  /** 총 페이지의 갯수 */
  total: number;
  /** 변경된 페이지를 담을 상태값 */
  setCurIdx?: React.Dispatch<SetStateAction<number>>;
  /** 페이지네이션의 border-radius */
  radius?: "sm" | "md" | "lg" | "full";
  /** 페이지네이션의 border 사용유무 **/
  isBorder?: boolean;
  /** 페이지네이션의 사이즈 */
  size?: "sm" | "md" | "lg";
};
const Pagination: FC<PaginationProps> = ({
  total,
  setCurIdx,
  radius = "full",
  size = "sm",
  isBorder = true,
}) => {
  const pages = [];
  const [pageIdx, setPageIdx] = useState(1);
  //연속된 숫자는 5개까지 보여주도록 하고 그 이전, 이후에는 ... 으로 구분지어준다.
  if (total < 6) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    //pageIdx가 5 이상일때부터 ...가 보여져야 하므로
    if (pageIdx >= 5) {
      //반대로, 토탈수에서 현재수가 4보다 작으면 끝에서 숫자다섯개 전부표시, 1 이후는 ... 표시
      if (total - pageIdx < 4) {
        pages.push(1);
        pages.push(
          <span className="border-none" key={"...1"}>
            ...
          </span>
        );
        for (let i = total - 4; i <= total; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(
          <span className="border-none" key={"...2"}>
            ...
          </span>
        );
        for (let i = pageIdx - 2; i < pageIdx + 3; i++) {
          pages.push(i);
        }
        pages.push(
          <span className="border-none" key={"...3"}>
            ...
          </span>
        );
        pages.push(total);
      }
    } else {
      for (let i = 1; i <= 5; i++) {
        pages.push(i);
      }
      pages.push(
        <span className="border-none" key={"...4"}>
          ...
        </span>
      );
      pages.push(total);
    }
  }

  const onChange = useCallback(
    (idx: number) => {
      setPageIdx(idx);
      setCurIdx && setCurIdx(idx);
    },
    [setCurIdx]
  );

  const customRadius =
    radius === "sm"
      ? "rounded-sm"
      : radius === "md"
      ? "rounded-md"
      : radius === "lg"
      ? "rounded-lg"
      : "rounded-full";

  const customSize =
    size === "sm"
      ? "w-6 h-6 text-xs"
      : size === "md"
      ? "w-7 h-7 text-sm"
      : "w-9 h-9 text-default";

  return (
    <div className="h-fit text-center flex items-center justify-center">
      <button
        className={`w-6 h-6 default-flex
        ${customSize}
       ${isBorder && "border"}
       ${radius && customRadius}
       ${
         pageIdx === 1
           ? "active-page text-gray-dark cursor-not-allowed"
           : "cursor-pointer"
       }`}
        onClick={() => onChange(pageIdx - 1)}
      >
        <ChevronLeftIcon
          className={` ${size === "lg" ? "w-5 h-5" : "w-3 h-3"}`}
        />
      </button>
      <ul className="flex gap-[10px] mx-[50px]">
        {pages.map((page: any, idx) => {
          return (
            <li
              onClick={() => onChange(page)}
              key={idx}
              className={` cursor-pointer text-center default-flex
                ${
                  pageIdx === page
                    ? "active-page font-semibold bg-black-default text-gray-light rounded-full"
                    : "unactive-page"
                }
                ${isBorder && "border"}
                ${radius && customRadius}
                ${customSize}
              `}
            >
              {page}
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => onChange(pageIdx + 1)}
        className={`w-6 h-6 default-flex 
          ${customSize}
          ${radius && customRadius}
          ${isBorder && "border"}
          ${
            pageIdx === total
              ? "active-page text-[#d1d1d1] cursor-not-allowed"
              : "cursor-pointer"
          }
          `}
      >
        <ChevronRightIcon
          className={` ${size === "lg" ? "w-5 h-5" : "w-3 h-3"}`}
        />
      </button>
    </div>
  );
};

export default Pagination;
