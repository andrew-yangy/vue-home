import Vue from "vue";
import Router from "vue-router";
import Layout from "@/pages/layout/Layout.vue";
import Rooms from "@/pages/rooms/Rooms.vue";
import store from "@/store";
import { FETCH_ROUTES, ADD_TABS } from "@/store/event-types";

Vue.use(Router);

export const constRoutes = [
  {
    path: "/rooms",
    name: "rooms",
    component: Rooms,
    meta: { title: "Rooms", icon: "rooms/plans", noCache: true }
  },
  {
    path: "/map",
    name: "map",
    meta: { title: "Map", icon: "google-maps", noCache: true }
  },
  {
    path: "/logbook",
    name: "logbook",
    meta: { title: "Logbook", icon: "calendar", noCache: true }
  },
  {
    path: "/history",
    name: "history",
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
  store.dispatch(ADD_TABS, to);
  store.dispatch(FETCH_ROUTES);
  next();
});
export default router;
