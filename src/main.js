import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";

Vue.config.productionTip = false;

Vue.filter("data", (data) => {
  return `${data.slice(8, 10)}/${data.slice(5, 7)} às ${data.slice(11, 13)}hrs`;
});

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
