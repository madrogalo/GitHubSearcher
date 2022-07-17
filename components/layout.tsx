import React from "react";
import { useRouter } from "next/router";
import { ILayoutProps } from "../intarfaces";
import styles from "../styles/Layout.module.scss";

const Layout = ({ children }: ILayoutProps) => {
  const router = useRouter();
  const goToMainPage = () => router.push("/");
  return (
    <div className={styles.container}>
      <h1 className={styles.styleLogo} onClick={goToMainPage}>GitHub Searcher</h1>
      {children}
    </div>
  );
};

export default Layout;
