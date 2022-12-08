import cls from "classnames";

import styles from "./component.module.scss";

type LoaderProps = {
  className?: string;
  absoluteFill?: string;
};

const Loader = ({ className, absoluteFill }: LoaderProps) => {
  return (
    <div className={cls(absoluteFill && styles.absoluteFill)}>
      <img
        className={cls(styles.loaderImg, className)}
        src="/assets/loading.svg"
      />
    </div>
  );
};

export { Loader };
