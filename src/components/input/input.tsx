import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";

import styles from "./input.module.scss";

export interface InputProps extends ComponentPropsWithRef<"input"> {
  name: string;
  message?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, message, ...props }, ref) => (
    <div className={styles.container}>
      <input
        ref={ref}
        id={name}
        name={name}
        type="text"
        {...props}
        className={styles.input}
      />
      {message && <span>{message}</span>}
    </div>
  )
);

Input.displayName = "Input";
