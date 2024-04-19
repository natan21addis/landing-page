import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import SignUp from "../components/SignUp.vue";
import Error from "../components/Error.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/:catchAll(.*)",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
