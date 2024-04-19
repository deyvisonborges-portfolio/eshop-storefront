import { Logo } from "@/components/logo/logo";
import styles from "./header.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <Logo />
    </header>
  );
}
