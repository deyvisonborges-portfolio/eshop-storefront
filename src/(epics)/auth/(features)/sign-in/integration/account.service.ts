export const AuthService = {
  async authenticate(email: string, password: string) {
    const response = await fetch(`/api/auth/sign-in`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Credenciais inválidas");
    }

    const data = await response.json();
    return data;
  },
};
