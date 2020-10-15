import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    noScroll: false
  },
  mutations: {
    setNoScroll(state, ns) {
      state.noScroll = ns;
    }
  },
  actions: {},
  modules: {}
});
