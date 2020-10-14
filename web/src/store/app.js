export default {
  namespaced: true,
  state: () => ({
    noScroll: false
  }),
  getters: {
    getNoScroll(state) {
      return state.noScroll;
    }
  },
  mutations: {
    setNoScroll(state, ns) {
      state.noScroll = ns;
    }
  },
  actions: {}
};
