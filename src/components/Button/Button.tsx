import { ComponentPropsWithRef, forwardRef } from "react";
import {
  ButtonColorType,
  ButtonVariantSize,
  ButtonVariantType,
} from "./button.types";

import styles from "./Button.module.scss";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonVariantSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => (
    <button
      ref={ref}
      name="button"
      className={`button__${props.variant} ${styles.button__primary}`}
    >
      {props.children}
    </button>
  )
);

Button.displayName = "Button";
