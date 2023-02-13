import AuthService from "@/services/AuthService";
import type { Module } from "vuex";

interface IUserState {
  accessToken: string | null;
}

const initialState: IUserState = {
  accessToken: sessionStorage.getItem("accessToken"),
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
        commit("loginSucceed", token);
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
    loginSucceed(state: IUserState, token: string) {
      console.log("[mutation] Login succeed");
      state.accessToken = token;
      sessionStorage.setItem("accessToken", token); // lo guarda en el session storage
    },
    loginFailed() {
      console.log("[mutation] Login failed");
    },
    loggedOut(state) {
      console.log("[mutation] Logged out");
      state.accessToken = null;
      sessionStorage.clear();
    },
  },
  getters: {
    isLoggedIn(state: IUserState): boolean {
      return state.accessToken != null;
    },
    accessToken(state: IUserState): string | null {
      return state.accessToken;
    },
  },
};
