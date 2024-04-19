// MyImageComponent.tsx

import React from "react";
import styles from "./sizing.module.scss";
import classNames from "classnames/bind";
import { SizingProps } from "./sizing";

const cx = classNames.bind(styles);

type MyImageComponentProps = {
  src: string;
  alt: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  sizing?: SizingProps;
};

const MyImageComponent: React.FC<MyImageComponentProps> = ({
  src,
  alt,
  objectFit,
  sizing,
}) => {
  const widthClass = sizing && sizing.width ? `w-${sizing.width}` : null;
  const imageClassNames = cx({
    image: true,
    [styles[objectFit!]]: objectFit,
    [widthClass!]: widthClass,
  });

  return <img className={imageClassNames} src={src} alt={alt} />;
};

export default MyImageComponent;