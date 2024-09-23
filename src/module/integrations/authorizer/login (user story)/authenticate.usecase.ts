type AuthenticateDTO = {
  email: string;
  password: string;
};

export async function authenticate(payload: AuthenticateDTO) {
  await new Promise(() => setTimeout(`Sended event ${payload}`, 3000));
}
