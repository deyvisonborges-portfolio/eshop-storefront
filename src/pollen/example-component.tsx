// MyImageComponent.tsx

import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { SizingProps } from "./sizing/sizing";

const cx = classNames.bind(styles);

type ExampleComponentProps = {
  src: string;
  alt: string;
  objectFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
  sizing?: SizingProps;
};

const MyImageComponent: React.FC<ExampleComponentProps> = ({
  src,
  alt,
  objectFit,
  sizing,
}) => {
  const widthClass = sizing && sizing.width ? `${sizing.width}` : null;
  const imageClassNames = cx({
    image: true,
    [styles[objectFit!]]: objectFit,
    [widthClass!]: widthClass,
  });

  return <img className={imageClassNames} src={src} alt={alt} />;
};

export default MyImageComponent;
