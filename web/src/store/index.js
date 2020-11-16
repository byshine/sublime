import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoReady: false,
    noScroll: false,
    user: null,
    validated: false
  },
  mutations: {
    setNoScroll(state, ns) {
      state.noScroll = ns;
    },
    setVideoReady(state, vr) {
      state.videoReady = vr;
    },
    setUser(state, user) {
      state.user = user;
    },
    setValidated(state, validated) {
      state.validated = validated;
    }
  },
  actions: {
    validateUser({ commit }, user) {
      commit("setUser", user);
      if (user && user.email === "eusahn@gmail.com") {
        commit("setValidated", true);
      } else {
        commit("setValidated", false);
      }
    }
  },
  modules: {}
});
