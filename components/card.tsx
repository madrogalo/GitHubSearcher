import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'
import styles from "../styles/Card.module.scss";
import { ICard } from '../intarfaces'


const Card = ({ avatarUrl, login, url }: ICard) => {
  const router = useRouter()
  const goToUserPage = (id: string) => {
    router.push(`/${id}`)
  }
  return (
    <div
      onClick={() => goToUserPage(login)}
      className={styles.card}
    >
      <div className={styles.leftBlock}>
        <Image src={avatarUrl}  width={80} height={80} alt={login} />
        <div className={styles.name}>{login}</div>
      </div>

      <div className={styles.repo}>Repo: {url}</div>

    </div>
  );
};

export default Card;
