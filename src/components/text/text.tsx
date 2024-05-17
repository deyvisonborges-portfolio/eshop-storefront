"use client";

import React, { createElement, forwardRef, HTMLAttributes } from "react";
import stylesTokens from "./text.token.module.scss";
import { UtilsStyles } from "@/styles/utils";
import cssUtils from "@/styles/utils.module.scss";
import classnames from "classnames";

type Size = "large" | "medium" | "small" | "mini";
type Weight = "regular" | "medium" | "bold";
type Style = "normal" | "link" | "upper";

type TextProps = {
  token: "body-large-regular" | "body-regular-regular";
  style?: Style;
  type?: "span" | "p";
  classNames?: string[];
  children: React.ReactNode;
  utilitie?: UtilsStyles;
} & HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>;

export const Text = forwardRef<
  HTMLAttributes<HTMLParagraphElement | HTMLSpanElement>,
  TextProps
>(
  (
    {
      token,
      style = "normal",
      children,
      type = "p",
      classNames: customClassNames = [],
      utilitie,
      ...rest
    },
    ref
  ) => {
    const textToken = stylesTokens[`${token}`];
    const textStyle = stylesTokens[`text__style--${style}`];
    const TextType = type || "p";

    return createElement(
      TextType,
      {
        ...rest,
        ref,
        className:
          classnames(
            textToken,
            textStyle,
            ...customClassNames,
            cssUtils[`${utilitie}`]
          ) || undefined,
      },
      children
    );
  }
);

Text.displayName = "Text";
