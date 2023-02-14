import { User } from "@/models/user";
import axios from "axios";

type UserResponse = {
  result: User | null;
};

class UserService {
  getUser(username: string): Promise<User> {
    return axios
      .get<UserResponse>(`/api/users/${username}`)
      .then((response) => response.data)
      .then((data) => {
        if (!data.result) {
          throw new Error("Usuario no encontrado");
        }
        return data.result;
      });
  }

  getCurrentUser(token: string): Promise<User> {
    return axios
      .get<User>(`/api/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => response.data);
  }
}

export default new UserService();
