import { createElement, forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./styles.module.scss";

type Formatting = "normal" | "link" | "upper";

type HeadingTokens = {
  "heading-primary": "h1";
  "heading-secondary": "h2";
  "heading-tertiary": "h3";
  "heading-quaternary": "h4";
  "heading-quinary": "h5";
  "heading-senary": "h6";
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
    ref,
  ) => {
    const tokens: HeadingTokens = {
      "heading-primary": "h1",
      "heading-secondary": "h2",
      "heading-tertiary": "h3",
      "heading-quaternary": "h4",
      "heading-quinary": "h5",
      "heading-senary": "h6",
    };

    const textToken = styles[token];
    const textFormatting = styles[`heading-formatting--${formatting}`];

    return createElement(
      tokens[token],
      {
        ref,
        className: `${textToken} ${textFormatting} ${classNames.join(" ")}`,
        ...rest,
      },
      children,
    );
  },
);

Heading.displayName = "Heading";
