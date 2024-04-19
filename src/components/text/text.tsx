import React, { createElement, forwardRef, HTMLAttributes } from "react";
import stylesTokens from "./text.token.module.scss";

type Size = "large" | "medium" | "small" | "mini";
type Weight = "regular" | "medium" | "bold";
type Style = "normal" | "link" | "upper";

type TextProps = {
  token: "body-large-regular";
  style?: Style;
  type?: "span" | "p";
  classNames?: string[];
  children: React.ReactNode;
} & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;

export const Text = forwardRef<
  HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
  TextProps
>(
  (
    { token, style = "normal", children, type = "p", classNames = [] },
    ref
  ) => {
    const textToken = stylesTokens[`${token}`];
    const textStyle = stylesTokens[`text__style--${style}`];
    const TextType = type || "p";

    return createElement(
      TextType,
      {
        ref,
        className: `${textToken} ${textStyle}`,
      },
      children
    );
  }
);

Text.displayName = "Text";
