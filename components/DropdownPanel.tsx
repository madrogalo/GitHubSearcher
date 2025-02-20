import React from "react";
import DropdownItem from "./DropdownItem";
import styles from "../styles/DropdownPanel.module.scss";

interface IItems {
  items: string[];
  onClick: () => string;
}

const DropdownPanel = ({ items, onClick }: IItems) => {
  return (
    <div className={styles.dropdownPanel}>
      {items.map((item) => (
        <DropdownItem key={item} onClick={onClick} item={item} />
      ))}
    </div>
  );
};
export default DropdownPanel;
