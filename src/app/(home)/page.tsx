import { Header } from "@/components/Header";
import { HeroSection } from "./components/hero-section";
import { Button } from "@/components/Button";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <pre className={styles.pre}>testando cor</pre>
    </>
  );
}
