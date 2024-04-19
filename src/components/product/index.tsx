/* eslint-disable @next/next/no-img-element */
import styles from "./product.module.scss";

export const Product = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image_container}>
        <img
          src="https://framerusercontent.com/images/r59ibP0ToXB3BqtNzkTUDO9ww.jpg"
          alt=""
        />

        <div className={styles["image_container--tag"]}>
          <span>GEAR</span>
        </div>
      </div>

      <div className={styles.info_container}>
        <h3>iWatch SE 3</h3>
        <p>R$ 2990,89</p>
      </div>
    </div>
  );
};
