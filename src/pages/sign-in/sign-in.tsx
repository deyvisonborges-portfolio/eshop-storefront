"use client";

import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Input } from "@/components/input/input";
import { Button } from "@/components/button";
import { InputCheckbox } from "@/components/input-checkbox";
import { InputRadio } from "@/components/input-radio";
import { useState } from "react";

export function SignInPage() {
  const [isChecked, setIsChecked] = useState(false)
  const [isChecked2, setIsChecked2] = useState(false)

  const toggleChecked = (value: boolean) => {
    setIsChecked(value)
  }

  const toggleChecked2 = (value: boolean) => {
    setIsChecked2(value)
  }

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

            <InputRadio
              radioSize="small"
              label={isChecked ? "Enable Checkbox" : "Disable Checkbox"}
              isChecked={isChecked}
              toggleChecked={toggleChecked}
            />
            <InputRadio
              radioSize="small"
              label={isChecked2 ? "Enable Checkbox" : "Disable Checkbox"}
              isChecked={isChecked2}
              toggleChecked={toggleChecked2}
            />
          </div>
          <Button isFull>Log In</Button>
        </div>
      </section>
    </StoreLayout>
  );
}
