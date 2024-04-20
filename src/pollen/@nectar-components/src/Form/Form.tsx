import React, { FormEventHandler, ReactNode } from "react";

export type FormProps = {
  children?: ReactNode;
  action?: string;
  method?: "get" | "post";
  target?: "_blank" | "_self" | "_parent" | "_top";
  classNames?: string[];
  autoComplete?: "on" | "off";
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

export const Form = ({
  children,
  action,
  method,
  target,
  classNames = [],
  autoComplete = "on",
  onSubmit,
  ...props
}: FormProps) => (
  <form
    autoComplete={autoComplete}
    action={action}
    method={method}
    target={target}
    onSubmit={onSubmit}
    {...(classNames ? { className: classNames.join(" ") } : {})}
    {...props}
  >
    {children}
  </form>
);
