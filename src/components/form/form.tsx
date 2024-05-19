import { mapUtilities, UtilsStyles } from "@/styles/utils/utils";
import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef, ReactNode } from "react";

interface FormProps extends ComponentPropsWithRef<"form"> {
  children?: ReactNode;
  utilitie?: UtilsStyles[];
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, utilitie = [], ...props }, ref) => (
    <form
      ref={ref}
      {...props}
      className={classNames(...mapUtilities(utilitie))}
    >
      {children}
    </form>
  )
);

Form.displayName = "Form";
