import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    changeNumber(state) {
      state.counter++;
    },
    resetNumber(state) {
      state.counter = 0;
    },
  },
  actions: {},
  modules: {},
});
