import authorizerService from "@/integrations/authorizer/authorizer.service";
import { FormEvent, useCallback } from "react";

export function useLogin() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) =>
    useCallback(() => {
      e.preventDefault();

      const payload = {
        email: e.currentTarget?.name,
        password: e.currentTarget?.password,
      };

      authorizerService.authenticate(payload);
    }, []);

  return { handleSubmit };
}
