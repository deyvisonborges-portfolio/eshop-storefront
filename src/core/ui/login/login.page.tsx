import { useLogin } from "./hooks/useLogin";

export function LoginPage() {
  const { handleSubmit } = useLogin();

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
