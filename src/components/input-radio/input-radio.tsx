import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef, memo } from "react";

import styles from "./input-radio.module.scss";
import { Text } from "../text";

interface InputRadioProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  radioSize?: "small" | "regular";
}

export const InputRadio = memo(
  forwardRef<HTMLInputElement, InputRadioProps>(
    ({ label, radioSize, disabled, ...props }, ref) => {
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
            type="radio"
            disabled={disabled}
            className={classNames(styles.input, styles[`size-${radioSize}`])}
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
