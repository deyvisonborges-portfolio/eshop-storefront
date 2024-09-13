import { createElement, forwardRef, HTMLAttributes, ReactNode } from "react";
import styles from "./heading.module.scss";

type Formatting = "normal" | "link" | "upper";

type HeadingTokens = {
  "heading-small-medium": "h5";
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
    const tokens: HeadingTokens = {
      "heading-small-medium": "h5",
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
      children
    );
  }
);

Heading.displayName = "Heading";
