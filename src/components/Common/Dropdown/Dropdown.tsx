import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { FC, SetStateAction, useCallback, useState } from "react";
import styles from "./dropdown.module.css";

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
    <section className={styles.dropdown_container}>
      <div
        className={styles.dropdown_wrapper}
        onClick={() => setIsOpenDropdown(!isOpenDropdown)}
      >
        <p>{selectItem}</p>
        <ChevronDownIcon />
      </div>
      {isOpenDropdown && (
        <ul className={styles.dropdown_list_box}>
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
