import { HeroSection } from "./components/hero-section";
import { FlashSalesSection } from "./components/flash-sales-section";

import styles from "./home.module.scss";
import { StoreLayout } from "@/layouts/store-layout";

export function HomePage() {
  return (
    <StoreLayout>
      <div className={styles.wrapper}>
        <HeroSection />
        <FlashSalesSection />
      </div>
    </StoreLayout>
  );
}
