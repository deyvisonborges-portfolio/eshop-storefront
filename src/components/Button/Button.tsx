import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";
import {
  ButtonColorType,
  ButtonVariantSize,
  ButtonVariantType,
} from "./button.types";

import styles from "./button.module.scss";
import classNames from "classnames";
import { renderChildren } from "../_utils_/render";
import { Spinner } from "../spinner";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: ButtonVariantType;
  color?: ButtonColorType;
  size?: ButtonVariantSize;
  isFull?: boolean;
  enableSpinner?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "default",
      color = "primary",
      size = "regular",
      children,
      isFull,
      enableSpinner = false,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref}
      name="button"
      type="button"
      className={classNames(
        styles[`button--${variant}`],
        styles[`button--${color}`],
        styles[`button--${size}`],
        styles[`button`],
        isFull && styles[`button--full-width`]
      )}
      {...props}
    >
      {enableSpinner && <Spinner size={size} />}
      {renderChildren(children)}
    </button>
  )
);

Button.displayName = "Button";
