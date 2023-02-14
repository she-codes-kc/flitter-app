import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
// eslint-disable-next-line
import loginGuard from "./loginGuard";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupView.vue"),
  },
  {
    path: "/profile/:username",
    name: "user",
    props: (route) => {
      const id = Number(route.params.id);
      return { id };
    },
    component: () => import("@/views/ProfileView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/MyProfileView.vue"),
    beforeEnter: [loginGuard],
  },
  {
    path: "/settings",
    name: "settings",
    component: () => import("@/views/SettingsView.vue"),
    beforeEnter: [loginGuard],
  },
  {
    path: "/password-recovery",
    name: "PasswordRecovery",
    component: () => import("@/views/PasswordRecoveryView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
