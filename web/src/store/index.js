import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoReady: false,
    noScroll: false
  },
  mutations: {
    setNoScroll(state, ns) {
      state.noScroll = ns;
    },
    setVideoReady(state, vr) {
      state.videoReady = vr;
    }
  },
  actions: {},
  modules: {}
});
