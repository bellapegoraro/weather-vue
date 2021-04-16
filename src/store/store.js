import axios from "axios";

export default {
  namespaced: true,
  state: {
    currentWeather: [],
    fiveDaysWeather: [],
  },
  getters: {
    getCurrentWeatherState: (state) => state.currentWeather,
    getFiveDaysWeatherState: (state) => state.fiveDaysWeather,
  },
  mutations: {
    getCurrentWeather(state, payload) {
      state.currentWeather = payload;
    },
    getFiveDaysWeather(state, payload) {
      state.fiveDaysWeather = payload;
    },
    getHour(state, payload) {
      state.hour = payload;
    },
  },
  actions: {
    async getCurrentWeather({ commit }, payload) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&lang=pt_br&units=metric&appid=${process.env.VUE_APP_API_KEY}`
      );
      console.log(response.data);

      commit("getCurrentWeather", response.data);
    },
    async getFiveDaysWeather({ commit }, payload) {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${payload.city}&lang=pt_br&units=metric&appid=${process.env.VUE_APP_API_KEY}`
      );

      const weatherByHour = response.data.list
        .map((weather) => weather)
        .filter((infos) => infos.dt_txt.includes(payload.hour));
      commit("getFiveDaysWeather", weatherByHour);
    },
  },
};
