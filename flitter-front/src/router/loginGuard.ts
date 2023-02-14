import store from "@/store";
import { RouteLocation } from "vue-router";

// eslint-disable-next-line
const loginGuard = (_to: RouteLocation, _from: RouteLocation, next: any) => {
  const isLoggedIn: boolean = store.getters["user/isLoggedIn"];
  if (isLoggedIn) {
    next();
  } else {
    next({ name: "login" });
  }
};

export default loginGuard;
