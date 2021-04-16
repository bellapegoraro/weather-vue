import Vue from "vue";
import Vuex from "vuex";
import weatherStore from "@/store/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { weatherStore },
});
