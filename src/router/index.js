import { createRouter, createWebHashHistory } from "vue-router";
import Dasboard from "../pages/dashboard/index.vue";
import Overview from "../pages/overview/index.vue";
const routes = [
  { path: "/dasboard", component: Dasboard, name: "dasboard" },
  { path: "/overview", component: Overview, name: "overview" },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
