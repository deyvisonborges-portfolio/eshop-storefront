import classNames from "classnames";
import styles from "./spinner.module.scss";

type SpinnerProps = {
  size?: "small" | "regular" | "medium";
};

export function Spinner({ size = "regular" }: SpinnerProps) {
  return (
    <i className={classNames(styles[`loader--${size}`], styles.loader)}></i>
  );
}
