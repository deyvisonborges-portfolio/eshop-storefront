import "react";

declare module "react" {
  interface CSSProperties {
    [varNAme: `--${string}`]: string | "custom-class";
  }
}
