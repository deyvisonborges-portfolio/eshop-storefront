export function PasswordCreationPage() {
  return (
    <form>
      <input id="password" placeholder="Nova senha" type="password" />

      <input
        id="confirmationPassword"
        placeholder="Confirme a nova senha"
        type="password"
      />
      <button type="submit">Confirmar</button>
    </form>
  );
}
