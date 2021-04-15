import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    city: "",
    hour: "",
  },
  mutations: {
    findCity(state, payload) {
      state.cidade = payload;
    },
    checkHour(state, payload) {
      state.hour = payload;
    },
  },
  actions: {
    findCity({ commit }, payload) {
      commit("findCity", payload);
    },
    checkHour({ commit, payload }) {
      commit("checkHour", payload);
    },
  },
});
