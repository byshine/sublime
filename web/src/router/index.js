import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/photography",
    name: "Photography",
    component: () =>
      import(/* webpackChunkName: "photography" */ "../views/Photography.vue")
  },
  {
    path: "/collaborate",
    name: "Collaborate",
    component: () =>
      import(/* webpackChunkName: "collaborate" */ "../views/Collaborate.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
