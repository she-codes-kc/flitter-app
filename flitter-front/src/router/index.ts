import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
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
    // beforeEnter: [loginGuard],
  },
  {
    path: "/profile/:username",
    name: "user",
    props: (route) => {
      const id = Number(route.params.id);
      return { id };
    },
    component: () => import("@/views/MyProfileView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
    beforeEnter: [loginGuard],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
