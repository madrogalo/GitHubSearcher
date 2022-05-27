import React from "react";
import Image from "next/image";
import { IUserInfo } from "../intarfaces";
import styles from "../styles/usetid.module.scss";

const UserInfo = ({ user }: IUserInfo) => {
  return (
    <div className={styles.userInfo}>
      <div className={styles.leftUserInfo}>
        <div className={styles.userImage}>
          {user.avatar_url && (
            <Image
              src={user.avatar_url}
              width={200}
              height={200}
              alt={user.name}
            />
          )}
        </div>
      </div>
      <div className={styles.rightUserInfo}>
        <div className={styles.infoText}>
          <div>
            Name: <span>{user.name}</span>
          </div>
          <div>
            Email: <span>{user.email}</span>
          </div>
          <div>
            Location: <span>{user.location}</span>
          </div>
          <div>
            Join Date: <span>{user.created_at}</span>
          </div>
          <div>
            Followers: <span>{user.followers}</span>
          </div>
          <div>
            Following: <span>{user.following}</span>
          </div>
          <div>Bio: {user.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
