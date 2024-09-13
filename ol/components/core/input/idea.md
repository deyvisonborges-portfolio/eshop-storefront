import { ComponentPropsWithRef, forwardRef, ReactNode, useMemo } from "react";

import styles from "./input.module.scss";
import classNames from "classnames";

type InputTypeProps = "text" | "currency" | "number" | "password" | "email";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  name: string;
  label?: string;
  message?: string;
  variant?: "default" | "underline";
  type?: InputTypeProps;
}

const renderPlaceholderTypeText: Record<InputTypeProps, string> = {
  text: "Digite aqui",
  currency: "R$0,00",
  number: "0",
  password: "Senha",
  email: "Digite aqui seu e-mail",
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { name, message, label, variant = "default", type = "text", ...props },
    ref
  ) => {
    const renderType = useMemo(() => {
      if (["text", "currency"].includes(type)) return "text";
      else if (type === "password") return "passord";
      else if (type === "email") return "email";
      else return "number";
    }, [type]);

    return (
      <div className={styles.container}>
        {label && (
          <label htmlFor={name} className={styles.label}>
            {label}
          </label>
        )}
        <input
          {...props}
          ref={ref}
          id={name}
          name={name}
          type={renderType}
          placeholder={renderPlaceholderTypeText[type]}
          className={classNames(styles.input, styles[`input-${variant}`])}
        />
        {message && <span className={styles["helper-text"]}>{message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
