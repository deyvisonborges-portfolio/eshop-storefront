import classNames from "classnames";
import styles from "./input-checkbox.module.scss";
import { ComponentPropsWithRef, forwardRef, memo } from "react";
import { Text } from "../text";

interface InputCheckboxProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  checkboxSize?: "small" | "regular";
}

export const InputCheckbox = memo(
  forwardRef<HTMLInputElement, InputCheckboxProps>(
    ({ label, checkboxSize = "regular", disabled, ...props }, ref) => {
      return (
        <label
          className={classNames(
            styles.container,
            disabled && styles[`label--disabled`]
          )}
        >
          <input
            {...props}
            ref={ref}
            type="checkbox"
            disabled={disabled}
            className={classNames(styles.input, styles[`size-${checkboxSize}`])}
          />
          {label && (
            <Text
              utilitie="selection-none"
              token="body-regular-regular"
              className={classNames(
                styles.label,
                disabled && styles[`label--disabled`]
              )}
            >
              {label}
            </Text>
          )}
        </label>
      );
    }
  )
);

InputCheckbox.displayName = "InputCheckbox";
