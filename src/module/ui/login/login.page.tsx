import { loginService } from "@/module/integrations/authorizer/login (user story)";
import { FormEvent, FormEventHandler, useCallback } from "react";

export function LoginPage() {
  const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginService.authenticate({
      email: e.currentTarget?.name,
      password: e.currentTarget?.password,
    });
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" />
        <input type="password" name="password" id="password" />
        <button type="submit">Autenticar</button>
      </form>
    </section>
  );
}
