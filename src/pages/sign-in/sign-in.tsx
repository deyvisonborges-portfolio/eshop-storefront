import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button";
import { InputCheckbox } from "@/components/input-checkbox";

export function SignInPage() {
  return (
    <StoreLayout>
      <section className={styles["box-container"]}>
        <div className={styles["box-content"]}>
          <Heading token="heading-small-medium">Login</Heading>
          <div className={styles["input-group"]}>
            <Input
              label="E-mail"
              name="input"
              type="email"
              placeholder="Enter you e-mail here"
              required
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="******"
              required
            />

            <InputCheckbox label="Manter-me conectado" checkboxSize="small" />
          </div>
          <Button isFull>Log In</Button>
        </div>
      </section>
    </StoreLayout>
  );
}
