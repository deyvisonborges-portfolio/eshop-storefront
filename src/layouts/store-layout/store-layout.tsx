import { ReactNode } from "react";
import { Header } from "./components/header";

import styles from "./store-layout.module.scss";

type StoreLayoutProps = {
  children: ReactNode;
};

export function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <>
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
}
