import { ReactNode } from "react";
import { Input, InputProps } from "../input";

type UnderlineInputProps = {
  inputBase: ReactNode;
  helperText?: string;
} & InputProps;

export function UnderlineInput({
  inputBase,
  helperText,
  ...props
}: UnderlineInputProps) {
  return (
    <div>
      {<Input {...props} />}
      {helperText && <p>{helperText}</p>}
    </div>
  );
}
