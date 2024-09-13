"use client";

import { Text } from "@/components/core/text";
import styles from "./footer.module.scss";
import { Input } from "@/components/core/input";
import { Button } from "@/components/core/button";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles["subscribe-container"]}>
        <Text token="body-large-regular" utilitie={["font-bold"]}>
          Subscribe
        </Text>

        <div className={styles["subscribe-input-group"]}>
          <Input
            name="email"
            type="email"
            placeholder="Enter your email here"
          />

          <Button>Subscribe</Button>
        </div>

        <Text token="body-medium-regular">
          No spam, notifications only about new offers. You can always
          unsubscribe.
        </Text>
      </div>
    </footer>
  );
};
