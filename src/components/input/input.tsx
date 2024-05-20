import {
  ComponentPropsWithRef,
  forwardRef,
  ReactNode,
  useMemo,
  useState,
} from "react";

import styles from "./input.module.scss";
import classNames from "classnames";
import Image from "next/image";

type InputTypeProps = "text" | "password" | "email";

interface InputProps extends ComponentPropsWithRef<"input"> {
  name: string;
  label?: string;
  message?: string;
  variant?: "default" | "underline";
  type?: InputTypeProps;
  hasIcon?: {
    eyeIcon?: boolean;
  };
}

const renderPlaceholderTypeText: Record<InputTypeProps, string> = {
  text: "Digite aqui sua senha",
  password: "Senha",
  email: "Digite aqui seu e-mail",
} as const;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      name,
      message,
      label,
      required,
      variant = "default",
      type = "text",
      hasIcon,
      ...props
    },
    ref
  ) => {
    const [hasEyeIcon, setEyeIcon] = useState<boolean>(true);

    if(type === "password") {
      hasIcon = {
        eyeIcon: true
      }
    }

    return (
      <div className={styles.container}>
        {label && (
          <label
            htmlFor={name}
            className={classNames(
              styles.label,
              required && styles[`label-required`]
            )}
          >
            {label}
          </label>
        )}
        <div className={styles["input-wrapper"]}>
          <input
            {...props}
            ref={ref}
            id={name}
            name={name}
            type={hasEyeIcon ? "password" : "text" || type}
            required={required}
            placeholder={renderPlaceholderTypeText[type]}
            className={classNames(
              styles.input,
              styles[`input-${variant}`],
              hasIcon && styles["input-icon"]
            )}
          />

          {type === "password" && (
            <Image
              alt="Password input eye icon"
              height={20}
              onClick={() => setEyeIcon(!hasEyeIcon)}
              src={`/svgs/eye-${hasEyeIcon ? "close" : "open"}-black-16.svg`}
              width={20}
            />
          )}
        </div>
        {message && <span className={styles["helper-text"]}>{message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
