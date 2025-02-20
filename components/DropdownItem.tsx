import React from "react";
import styles from "../styles/DropdownItem.module.scss";

interface IDropdownItem {
  item: string;
  onClick: (arg: string) => string;
}
const DropdownItem = ({ item, onClick }: IDropdownItem) => {
  return (
    <div className={styles.dropdownItem} onClick={() => onClick(item)}>
      {item}
    </div>
  );
};

export default DropdownItem;
