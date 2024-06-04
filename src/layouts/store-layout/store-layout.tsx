import { ReactNode } from "react";
import { Header } from "./components/header";

import styles from "./store-layout.module.scss";
import { Footer } from "./components/footer";

type StoreLayoutProps = {
  children: ReactNode;
};

export function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <main className={styles.container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </main>
  );
}
