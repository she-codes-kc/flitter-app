import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
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
    props: (route) => {
      const id = Number(route.params.id);
      return { id };
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/FlittView.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
