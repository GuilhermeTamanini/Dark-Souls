import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import HowtoplayView from "../views/HowtoplayView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/htp",
      name: "htp",
      component: HowtoplayView,
    },
    {
      path: "/bandai",
      name: "bandai",
      component: () => import("../views/BandaiView.vue"),
    },
    {
      path: "/fromsoftware",
      name: "fromsoftware",
      component: () => import("../views/FromsoftwareView.vue"),
    },
    {
      path: "/ds1",
      name: "ds1",
      component: () => import("../views/Darksouls1View.vue"),
    },
    {
      path: "/ds2",
      name: "ds2",
      component: () => import("../views/Darksouls2View.vue"),
    },
    {
      path: "/ds3",
      name: "ds3",
      component: () => import("../views/Darksouls3View.vue"),
    },
  ],
});

export default router;
