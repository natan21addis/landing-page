import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import login from "./components/login.vue";
import SideBar from "./components/SideBar.vue";
import AboutPage from "./components/AboutPage.vue";
import TeamPage from "./components/TeamPage.vue";
import ContactPage from "./components/ContactPage.vue";
import SettingsPage from "./components/SettingsPage.vue";
import mycontacts from "./components/mycontacts.vue";

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
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/sidebar",
    name: "SideBar",
    component: SideBar,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/team",
    name: "TeamPage",
    component: TeamPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
  {
    path: "/settings",
    name: "SettingsPage",
    component: SettingsPage,
  },
  {
    path: "/mycontacts",
    name: "mycontacts",
    component: mycontacts,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
