import React from "react";

import styles from "./component.module.scss";

const InterDashesText = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.interDashesText}>{children}</div>;
};

export { InterDashesText };
