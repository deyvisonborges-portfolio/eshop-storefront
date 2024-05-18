import classNames from "classnames";
import {
  ChangeEvent,
  ComponentPropsWithRef,
  forwardRef,
  useCallback,
} from "react";

import styles from "./input-radio.module.scss";
import { Text } from "../text";

interface InputRadioProps extends ComponentPropsWithRef<"input"> {
  label?: string;
  radioSize?: "small" | "regular";
  isChecked?: boolean;
  toggleChecked: (value: boolean) => void;
}

export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  ({ label, radioSize, disabled, isChecked, toggleChecked, ...props }, ref) => {
    const handleOnChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        toggleChecked(event.target.checked);
      },
      [toggleChecked]
    );

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
          checked={isChecked}
          onChange={handleOnChange}
        />
        {label && (
          <Text
            utilitie={["select-none", "font-bold"]}
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
);

InputRadio.displayName = "InputRadio";
