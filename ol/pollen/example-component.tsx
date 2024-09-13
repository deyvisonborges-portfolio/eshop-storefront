// MyImageComponent.tsx

import React from "react";
import styles from "./index.module.scss";
import classNames from "classnames/bind";
import { SizingProps } from "./sizing/sizing";
import Image from "next/image";

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

  return <Image className={imageClassNames} src={src} alt={alt} width={120} height={120} />;
};

export default MyImageComponent;
