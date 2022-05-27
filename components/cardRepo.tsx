import React from "react";
import styles from "../styles/CardRepo.module.scss";
import { ICardRepo } from "../intarfaces"

const CardRepo = ({
  name,
  forks,
  stargazers_count
}: ICardRepo) => {

  return (
    <div className={styles.card}>
      <div className={styles.leftBlock}>{name}</div>
      <div className={styles.rigthBlock}>
        {forks} Forks <br />
        {stargazers_count} Stars
      </div>

    </div>
  );
};

export default CardRepo;
