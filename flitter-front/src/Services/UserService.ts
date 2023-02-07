import { User } from "@/models/user";
import axios from "axios";

class UserService {
  getUser(accessToken: string): Promise<User> {
    return axios
      .get<User>("https://api.escuelajs.co/api/v1/auth/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => response.data);
  }
}

export default new UserService();
