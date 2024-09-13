import { ReactNode } from "react";

export const renderChildren = (value: ReactNode) => {
  if (typeof value !== "string") {
    throw new Error("Button render children error", {
      cause:
        "Children whith invalid type. Children should be render a 'string'",
    });
  }
  return value;
};
