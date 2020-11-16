import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import axios from "axios";
import VueGtag from "vue-gtag";
require("object-fit-polyfill");
console.log(process.env.NODE_ENV);
axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "https://us-central1-classicstyle-2c480.cloudfunctions.net/widgets"
    : "http://localhost:5001/classicstyle-2c480/us-central1/widgets/";

Vue.config.productionTip = false;

if (process.env.NODE_ENV === "production") {
  Vue.use(VueGtag, {
    config: { id: "G-HF3V4ZQ4WX" }
  });
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
