import classNames from "classnames";
import { Text } from "../core/text";
import styles from "./product.module.scss";

export const Product = () => (
  <div className={styles.product}>
    <div className={styles["product-image"]}>
      <Text
        token="body-small-regular"
        type="span"
        classNames={[styles["product-tag"]]}
      >
        label
      </Text>
    </div>
  </div>
);
