import React from "react";
import { ISearchPanel } from "../intarfaces";
import styles from "../styles/SearchPanel.module.scss";

const SearchPanel = ({ handleSearch, placeholder }: ISearchPanel) => {
  return (
    <input
      className={styles.inputSaerch}
      placeholder={placeholder}
      type="text"
      onChange={handleSearch}
    />
  );
};

export default SearchPanel;
