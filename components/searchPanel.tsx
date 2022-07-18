import React from "react";
import { ISearchPanel } from "../intarfaces";
import styles from "../styles/SearchPanel.module.scss";
import DropdownPanel from "./dropdownPanel/index";

const SearchPanel = ({ handleSearch, placeholder, repoNames, onClick }: ISearchPanel) => {
  return (
    <div>
      <input
        className={styles.inputSaerch}
        placeholder={placeholder}
        type="text"
        onChange={handleSearch}
      />
      {repoNames && repoNames.length > 0 && <DropdownPanel onClick={onClick} items={repoNames}/>}
    </div>
  );
};

export default SearchPanel;
