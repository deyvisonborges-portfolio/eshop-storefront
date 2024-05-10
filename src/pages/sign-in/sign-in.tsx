"use client";

import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { FormEvent, FormEventHandler } from "react";

export function SignInPage() {
  return (
    <StoreLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <Button size="small" type="button">
          Entrar
        </Button>
        <Button size="regular" type="button">
          Disabled
        </Button>
        <Button size="medium" type="button" isFull>
          Disabled
        </Button>
        <Button size="small" type="button" enableSpinner>
          Carregando
        </Button>
        <Button size="regular" type="button" enableSpinner>
          Carregando
        </Button>
        <Button size="medium" type="button" enableSpinner>
          Carregando
        </Button>
      </div>
    </StoreLayout>
  );
}
