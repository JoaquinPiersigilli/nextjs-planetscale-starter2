import React from "react";

import styles from "./component.module.scss";

const ColumnFlexContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.columnFlexContainer}>{children}</div>;
};

export { ColumnFlexContainer };
