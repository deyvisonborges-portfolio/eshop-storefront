import { FormEvent, useCallback, useMemo } from "react";

export function useForm() {
  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>, callback: CallableFunction) => {
      event.preventDefault();
      callback();
    },
    [],
  );

  return { handleSubmit };
}
