import React from "react";

import styles from "./component.module.scss";

const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.content}>{children}</div>;
};

export { Content };
