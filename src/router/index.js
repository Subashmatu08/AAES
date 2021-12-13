import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/instillation",
    name: "instillation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Instillation.vue"),
  },
  {
    path: "/transformers",
    name: "transofmers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Transformer.vue"),
  },
  {
    path: "/project-management",
    name: "project-management",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProjectManagement.vue"),
  },
  {
    path: "/accreditations",
    name: "accreditations",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Accreditation.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactUs.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
