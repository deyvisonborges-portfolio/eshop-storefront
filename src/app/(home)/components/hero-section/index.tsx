import { Product } from "@/components/product";
import styles from "./hero-section.module.scss";

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          High-quality tech gadgets & accessories
        </h1>
        <p className={styles.description}>
          Shop our curated selection of premium products, designed to elevate
          your everyday experiences
        </p>
      </div>

      <div className={styles["product-grid"]}>
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
