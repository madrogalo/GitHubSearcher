import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ICard } from "../intarfaces";
import styles from "../styles/Card.module.scss";

const Card = ({ avatarUrl, login, html_url }: ICard) => {
  const router = useRouter();
  const goToUserPage = (id: string) => {
    router.push(`/${id}`);
  };
  return (
    <div className={styles.card}>
      <div className={styles.leftBlock} onClick={() => goToUserPage(login)} >
        {avatarUrl && (
          <Image src={avatarUrl} width={80} height={80} alt={login} />
        )}
        <div className={styles.name}>{login}</div>
      </div>

      <div className={styles.repo}>
        Repo:
        <a href={html_url} target={"_blank"} rel="noreferrer">
          {html_url}
        </a>
      </div>
    </div>
  );
};

export default Card;
