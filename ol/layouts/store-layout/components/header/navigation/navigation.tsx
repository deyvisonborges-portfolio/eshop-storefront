import styles from "./navigation.module.scss";

export const HeaderNavigation = () => {
  return (
    <ul className={styles.menu}>
      <li className={styles["menu-item"]}>
        <a href="default.asp">Home</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="news.asp">Contact</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="contact.asp">About</a>
      </li>
      <li className={styles["menu-item"]}>
        <a href="about.asp">Pay</a>
      </li>
    </ul>
  );
};
