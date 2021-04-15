import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import axios from "./plugins/axios";
import store from "./store/store";

Vue.config.productionTip = false;

new Vue({
  store,
  axios,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
