import Vue from "vue";
import Router from "vue-router";
import Layout from "@/pages/layout/Layout.vue";
import store from "@/store";
import { FETCH_ROUTES } from "@/store/event-types";

Vue.use(Router);

export const constRoutes = [
  {
    path: "/states",
    component: Layout,
    meta: { title: "States", icon: "television-guide", noCache: true }
  },
  {
    path: "/map",
    component: Layout,
    meta: { title: "Map", icon: "google-maps", noCache: true }
  },
  {
    path: "/logbook",
    component: Layout,
    meta: { title: "Logbook", icon: "calendar", noCache: true }
  },
  {
    path: "/history",
    component: Layout,
    meta: { title: "History", icon: "chart-line", noCache: true }
  }
];
const mainRoutes = [
  {
    path: "",
    component: Layout,
    children: constRoutes
  }
];

const router = new Router({
  mode: "history",
  routes: [...mainRoutes]
});
router.beforeEach((to, from, next) => {
  store.dispatch(FETCH_ROUTES);
  next();
});
export default router;
