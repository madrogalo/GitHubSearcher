import React from "react";
import styles from "../styles/SearchPanel.module.scss";
import { ISearchPanel } from '../intarfaces'

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
