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
  register(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) {
    return axios.post<void>("/api/auth/register", {
      firstName,
      lastName,
      username,
      email,
      password,
    });
  }
}

export default new AuthService();
