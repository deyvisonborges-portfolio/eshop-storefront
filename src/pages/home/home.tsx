import { Header } from "@/components/Header";
import { HeroSection } from "./components/hero-section";
import { FlashSalesSection } from "./components/flash-sales-section";

import styles from "./home.module.scss";

export function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <HeroSection />
        <FlashSalesSection />
      </main>
    </>
  );
}
