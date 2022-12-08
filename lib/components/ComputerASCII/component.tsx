import React from "react";

import styles from "./component.module.scss";

const ComputerASCII = () => {
  return (
    <div className={styles.asciiArt}>{`
  .___________________.
  | ._______________. |
  | |               | |
  | |    •     •    | |
  | |       L       | |
  | |  ._________.  | |
  | !_______________! |
  !___________________!
  .___|_________•_|___.  
  |-LLLLLLLLLLLLLLLLL-|
  !___________________!`}</div>
  );
};

export { ComputerASCII };
