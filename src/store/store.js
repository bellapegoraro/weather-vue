import axios from "axios";

export default {
  namespaced: true,
  state: {
    currentWeather: [],
    fiveDaysWeather: [],
  },
  getters: {},
  mutations: {
    getCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
    getFiveDaysWeather(state, payload) {
      const weatherByHour = payload.response.list
        .map((weather) => weather)
        .filter((infos) => infos.dt_txt.includes(payload.payload.hour));

      state.fiveDaysWeather = weatherByHour;
    },
  },
  actions: {
    async getCurrentWeather({ commit }, payload) {
      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/weather?q=${payload}&lang=pt_br&units=metric&appid=${process.env.VUE_APP_API_KEY}`
      // );

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: payload,
            lang: "pt_bt",
            units: "metric",
            appid: process.env.VUE_APP_API_KEY,
          },
        }
      );

      commit("getCurrentWeather", response.data);
    },
    async getFiveDaysWeather({ commit }, payload) {
      // const response = await axios.get(
      //   `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&lang=pt_br&units=metric&appid=${process.env.VUE_APP_API_KEY}`
      // );

      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        {
          params: {
            q: payload.city,
            lang: "pt_bt",
            units: "metric",
            appid: process.env.VUE_APP_API_KEY,
          },
        }
      );

      commit("getFiveDaysWeather", { response: response.data, payload });
    },
  },
};
