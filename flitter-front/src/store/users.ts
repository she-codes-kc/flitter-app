import { User } from "@/models/user";
import AuthService from "@/services/AuthService";
import UserService from "@/services/UserService";
import type { Module } from "vuex";

interface IUserState {
  accessToken: string | null;
  user: User | null;
}

const initialToken = sessionStorage.getItem("accessToken");
const initialUser = localStorage.getItem("user");

const initialState: IUserState = {
  accessToken: initialToken,
  user: initialUser ? JSON.parse(initialUser) : null,
};

type LoginFields = { email: string; password: string };

export const user: Module<IUserState, unknown> = {
  namespaced: true,
  state: initialState,
  actions: {
    async login({ commit }, { email, password }: LoginFields) {
      console.log("[action] Loggin in");

      try {
        const token = await AuthService.login(email, password);
        const user = await UserService.getCurrentUser(token);
        commit("loginSucceed", { token, user });
        return token;
      } catch (error) {
        // TODO: Manejar error
        commit("loginFailed");
        throw error;
      }
    },
    logout({ commit }) {
      commit("loggedOut");
    },
  },
  mutations: {
    loginSucceed(
      state: IUserState,
      { token, user }: { token: string; user: User }
    ) {
      console.log("[mutation] Login succeed");
      state.accessToken = token;
      state.user = user;
      sessionStorage.setItem("accessToken", token); // lo guarda en el session storage
      localStorage.setItem("user", JSON.stringify(user));
    },
    loginFailed() {
      console.log("[mutation] Login failed");
    },
    loggedOut(state) {
      console.log("[mutation] Logged out");
      state.accessToken = null;
      state.user = null;
      sessionStorage.clear();
      localStorage.clear();
    },
  },
  getters: {
    isLoggedIn(state: IUserState): boolean {
      return state.accessToken != null;
    },
    accessToken(state: IUserState): string | null {
      return state.accessToken;
    },
    username(state: IUserState): string | null {
      return state.user?.username || null;
    },
  },
};
