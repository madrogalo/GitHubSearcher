import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Layout.module.scss";
import { ILayoutProps } from "../intarfaces";

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const goToMainPage = () => router.push("/");
  return (
    <div className={styles.container}>
      <h1 onClick={goToMainPage}>GitHub Searcher</h1>
      {children}
    </div>
  );
};

export default Layout;
