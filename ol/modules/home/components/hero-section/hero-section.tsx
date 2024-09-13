/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import styles from "./hero-section.module.scss";

export function HeroSection() {
  return (
    <section className={styles.wrapper}>
      <img src="/images/hero-banner.png" />
    </section>
  );
}
