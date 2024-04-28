import { createElement, forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./heading.module.scss";

type Formatting = "normal" | "link" | "upper";

type HeadingTokens = {
  h5: "heading-small-medium";
};

type HeadingProps = {
  token: keyof HeadingTokens;
  formatting?: Formatting;
  classNames?: string[];
  children: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { token, formatting = "normal", children, classNames = [], ...rest },
    ref
  ) => {
    const tokens = {
      h5: "heading-small-medium",
    } as HeadingTokens;

    const textToken = styles[tokens[token]];
    const textFormatting = styles[`heading-formatting--${formatting}`];

    return createElement(
      token,
      {
        ref,
        className: `${textToken} ${textFormatting} ${classNames.join(" ")}`,
        ...rest,
      },
      children
    );
  }
);

Heading.displayName = "Heading";
