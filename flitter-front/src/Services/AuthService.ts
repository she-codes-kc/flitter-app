import axios from "axios";

type LoginResponse = { access_token: string; refresh_token: string };

class AuthService {
  login(email: string, password: string): Promise<string> {
    return axios
      .post<LoginResponse>("https://api.escuelajs.co/api/v1/auth/login", {   //cambiar por el real
        email,
        password,
      })
      .then((response) => {
        return response.data.access_token;
      });
  }
}

export default new AuthService();
