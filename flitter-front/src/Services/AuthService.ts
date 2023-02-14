import axios from "axios";

type LoginResponse = { accessToken: string | false };

class AuthService {
  login(email: string, password: string): Promise<string> {
    return axios
      .post<LoginResponse>("/api/auth/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.accessToken === false) {
          throw new Error("Email o contraseña inválida");
        }
        return response.data.accessToken;
      });
  }
}

export default new AuthService();
