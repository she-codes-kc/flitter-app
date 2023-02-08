import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
<<<<<<< HEAD
import loginGuard from "./loginGuard";
=======
>>>>>>> parent of 02fa768... Merge pull request #6 from she-codes-kc/vistas-componentes

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
<<<<<<< HEAD
    component: () => import("@/views/ListFlit.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/LoginView.vue"),
    beforeEnter: [loginGuard],
  },
  {
    path: "/profile/:username",
    name: "user",
=======
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/ListFlitt.vue"),
  },
  {
    path: "/about-us",
    name: "about-us",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.../views/Nosotras.vue
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutUs.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/LoginView.vue"),
  },
  {
    path: "/flitt/:id",
    name: "flitt",
>>>>>>> parent of 02fa768... Merge pull request #6 from she-codes-kc/vistas-componentes
    props: (route) => {
      const id = Number(route.params.id);
      return { id };
    },
<<<<<<< HEAD
    component: () => import("@/views/FlitView.vue"),
=======
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/FlittView.vue"),
>>>>>>> parent of 02fa768... Merge pull request #6 from she-codes-kc/vistas-componentes
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
<<<<<<< HEAD
    beforeEnter: [loginGuard],
=======
>>>>>>> parent of 02fa768... Merge pull request #6 from she-codes-kc/vistas-componentes
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
