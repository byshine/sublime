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
  },
  {
    path: "/About",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import(/* webpackChunkName: "collaborate" */ "../views/Gallery.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
