import React from "react";

import styles from "./component.module.scss";

const MainContentContainer = ({
  firstChild,
  secondChild,
}: {
  firstChild: React.ReactNode;
  secondChild: React.ReactNode;
}) => {
  return (
    <div className={styles.mainContentContainer}>
      <div className={styles.firstChild}>{firstChild}</div>
      <div className={styles.secondChild}>{secondChild}</div>
    </div>
  );
};

export { MainContentContainer };
