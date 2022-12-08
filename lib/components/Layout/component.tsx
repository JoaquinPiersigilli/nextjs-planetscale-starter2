import React from "react";
import { Content } from "../Content";
import { Navbar } from "../Navbar";
import styles from "./component.module.scss";

const Layout = ({
  content,
  navbar,
}: {
  content: React.ReactNode;
  navbar: React.ReactNode;
}) => {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>{navbar}</div>
      <div className={styles.content}>
        <Content>{content}</Content>
      </div>
    </div>
  );
};

export { Layout };
