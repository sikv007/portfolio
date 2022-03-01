import { createRouter, createWebHistory } from "vue-router";
import TheAbout from "../views/TheAbout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: TheAbout }],
});

export default router;
