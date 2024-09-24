import { AxiosService } from "../core/axios/axios.service";
import { endpoints } from "../core/endpoints";
import { AuthenticateInputProps } from "./authorizer.types";

class AuthorizerService extends AxiosService {
  constructor() {
    super(endpoints.remote.v1.authorizer);
  }

  public authenticate(payload: AuthenticateInputProps) {
    return this.push<{ email: string }, AuthenticateInputProps>(
      "/login",
      payload,
    );
  }
}

export default new AuthorizerService();
