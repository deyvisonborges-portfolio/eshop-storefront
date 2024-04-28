import { Heading } from "@/components/heading";
import { StoreLayout } from "@/layouts/store-layout";

import styles from "./sign-in.module.scss";
import { Text } from "@/components/text";
import { Button } from "@/components/Button";

export function SignInPage() {
  return (
    <StoreLayout>
      <section className={styles.container}>
        <article className={styles["content-left"]}></article>
        <article className={styles["content-right"]}>
          {/* TODO: Convert do GroupComponent */}
          <div className={styles["description-group"]}>
            <Heading token="heading-small-medium">Crie sua conta</Heading>
            <Text token="body-regular-regular">Insira seus dados abaixo</Text>
          </div>

          <form action="#" className={styles.form}>
            <div className={styles["input-group"]}>
              <input
                className={styles.input}
                type="email"
                placeholder="E-mail ou telefone"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Senha"
              />
            </div>

            <div className={styles["button-group"]}>
              <Button type="button">Entrar</Button>
              <Button type="button" variant="ghost">
                Esqueci a senha
              </Button>
            </div>
          </form>
        </article>
      </section>
    </StoreLayout>
  );
}
