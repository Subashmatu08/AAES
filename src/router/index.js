import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";
import ErrorPage from "../views/ErrorPage.vue";

const routes = [
  {
    path: "/",
    name: "instillation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Instillation.vue"),
  },
  {
    path: "/transformers",
    name: "transformers",
    component: () =>
      import(/* webpackChunkName: "transformers" */ "../views/Transformer.vue"),
  },
  {
    path: "/project-management",
    name: "project-management",
    component: () =>
      import(
        /* webpackChunkName: "ProjectManagement" */ "../views/ProjectManagement.vue"
      ),
  },
  {
    path: "/accreditations",
    name: "accreditations",
    component: () =>
      import(
        /* webpackChunkName: "Accreditation" */ "../views/Accreditation.vue"
      ),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "ContactUs" */ "../views/ContactUs.vue"),
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/:catchAll(.*)",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      return savedPosition || { top: 0, behavior: "smooth" };
    }
  },
});
export default router;
