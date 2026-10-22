import { createRouter, createWebHashHistory } from "vue-router";
import Index from "@/pages/index.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});

export default router;
