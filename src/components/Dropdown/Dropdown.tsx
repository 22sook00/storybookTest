import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { FC, SetStateAction, useCallback, useState } from "react";
//import "./dropdown.css";

interface DropdownProps {
  options: any;
  selectItem: any;
  setSelectItem: React.Dispatch<SetStateAction<any>>;
}

const Dropdown: FC<DropdownProps> = ({
  options,
  selectItem,
  setSelectItem,
}) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const handleChangeItem = useCallback(
    (item: string) => {
      setSelectItem(item);
      setIsOpenDropdown(!isOpenDropdown);
    },
    [isOpenDropdown, setSelectItem]
  );
  return (
    <section className="dropdown-container">
      <div
        className="dropdown-wrapper"
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <p>{selectItem}</p>
        <ChevronDownIcon />
      </div>
      {isOpenDropdown && (
        <ul className="dropdown-list-box">
          {options.map((item: any, idx: number) => {
            return (
              <li onClick={() => handleChangeItem(item)} key={idx}>
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Dropdown;
