"use client";

import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button";
import { InputCheckbox } from "@/components/input-checkbox";
import { Text } from "@/components/text";
import Link from "next/link";
import { useFormState } from "react-dom";
import { Form } from "@/components/form";

type FormState = {
  email: string;
  password: string;
};

export async function onFormPostAction(state: FormState, payload: FormData) {
  return {
    email: String(payload.get("email")),
    password: String(payload.get("password")),
  };
}

export function SignInPage() {
  const [state, action] = useFormState(onFormPostAction, {
    email: "",
    password: "",
  });

  return (
    <StoreLayout>
      <section className={styles["box-container"]}>
        <div className={styles["box-content"]}>
          <Heading token="heading-small-medium">Login</Heading>

          <Form
            action={action}
            utilitie={["flex", "flex-column", "gap-40", "w-full"]}
          >
            <div className={styles["input-group"]}>
              <Input
                label="E-mail"
                name="email"
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
                <InputCheckbox
                  label="Manter-me conectado"
                  checkboxSize="small"
                />
                {/* TODO: create anchor next component */}
                <Link href="/reset-password">
                  <Text utilitie={["touchable"]} token="body-medium-regular">
                    Esqueci minha senha
                  </Text>
                </Link>
              </div>
            </div>

            <Button type="submit" isFull>
              Log In
            </Button>
          </Form>
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
