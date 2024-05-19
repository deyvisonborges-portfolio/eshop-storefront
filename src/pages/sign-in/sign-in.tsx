"use client";

import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button";
import { InputCheckbox } from "@/components/input-checkbox";
import { Text } from "@/components/text";
import Link from "next/link";

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

            <div className={styles.footer}>
              <InputCheckbox label="Manter-me conectado" checkboxSize="small" />
              {/* TODO: create anchor next component */}
              <Link href="/reset-password">
                <Text utilitie={["touchable"]} token="body-medium-regular">
                  Esqueci minha senha
                </Text>
              </Link>
            </div>
          </div>

          <Button isFull>Log In</Button>
          <hr />

          <Text token="body-regular-regular" utilitie={["gap-8"]}>
            Não possui conta?
            <Link href="/register">
              <Text type="span" token="body-regular-regular">
                Criar conta
              </Text>
            </Link>
          </Text>
        </div>
      </section>
    </StoreLayout>
  );
}
