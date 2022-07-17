import React from "react";
import { ICardRepo } from "../intarfaces";
import styles from "../styles/CardRepo.module.scss";

const CardRepo = ({ name, forks, stargazers_count, html_url }: ICardRepo) => {
  return (
    <div className={styles.card}>
      <div className={styles.leftBlock}>
        <a href={html_url} target={"_blank"} rel="noreferrer">
          {name}
        </a>
      </div>
      <div className={styles.rigthBlock}>
        {forks} Forks <br />
        {stargazers_count} Stars <br />
        <a href={html_url} target={"_blank"} rel="noreferrer">
          go to repo
        </a>
      </div>
    </div>
  );
};

export default CardRepo;
