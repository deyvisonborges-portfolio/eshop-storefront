import { ComponentPropsWithRef, forwardRef } from "react";
import {
  ButtonColorType,
  ButtonVariantSize,
  ButtonVariantType,
} from "./button.types";

import styles from "./button.module.scss";
import classNames from "classnames";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonVariantSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "default", color = "primary", size = "regular", children },
    ref
  ) => (
    <button
      ref={ref}
      name="button"
      className={classNames(
        styles[`button--${variant}`],
        styles[`button--${color}`],
        styles[`button--${size}`],
        styles.button
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = "Button";
