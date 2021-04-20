import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import weatherStore from "./store";
import {
  localCurrentWeatherData,
  localFiveDaysWeatherData,
  localFilteredFiveDaysWeather,
} from "./helpers";

let mock = new MockAdapter(axios);

describe("weatherStore", () => {
  const { mutations } = weatherStore;

  describe("load data from api", () => {
    it("should load current weather", async () => {
      mock
        .onGet("https://api.openweathermap.org/data/2.5/weather", {
          params: {
            q: "curitiba",
            lang: "pt_bt",
            unitis: "metric",
            appid: process.env.VUE_APP_API_KEY,
          },
        })
        .reply(200, localCurrentWeatherData);
    });

    it("should load five days weather", async () => {
      mock
        .onGet("https://api.openweathermap.org/data/2.5/forecast", {
          params: {
            q: "curitiba",
            lang: "pt_bt",
            unitis: "metric",
            appid: process.env.VUE_APP_API_KEY,
          },
        })
        .reply(200, localFiveDaysWeatherData);
    });
  });

  describe("mutations", () => {
    describe("currentWeather", () => {
      it("should set current weather list", () => {
        const state = {
          currentWeather: [],
        };
        mutations.getCurrentWeather(state, [localCurrentWeatherData]);
        expect(state.currentWeather).toEqual([localCurrentWeatherData]);
      });
    });
    describe("fiveDaysWeather", () => {
      it("should set five days weather list", () => {
        const payload = {
          response: localFiveDaysWeatherData,
          payload: { city: "curitiba", hour: "09:00:00" },
        };
        const state = {
          fiveDaysWeather: [],
        };
        mutations.getFiveDaysWeather(state, payload);
        expect(state.fiveDaysWeather).toEqual(localFilteredFiveDaysWeather);
      });
    });
  });

  // describe("actions", () => {
  //   describe("get current weather", () => {
  //     const context = {
  //       commit: jest.fn(),
  //     };
  //     it("should commit data from current weather", async () => {
  //       await actions.getCurrentWeather(context, "curitiba");
  //       expect(context.commit).toHaveBeenCalledWith(
  //         "getCurrentWeather",
  //         localCurrentWeatherData
  //       );
  //     });
  //   });

  //   describe("get five days weather", () => {
  //     const context = {
  //       commit: jest.fn(),
  //     };
  //     const payload = {
  //       city: "curitiba",
  //       hour: "09:00:00",
  //     };
  //     it("should commit data from five days weather", async () => {
  //       await actions.getFiveDaysWeather(context, payload);
  //       expect(context.commit).toHaveBeenCalledWith("getFiveDaysWeather", {
  //         response: localFiveDaysWeatherData,
  //         payload,
  //       });
  //     });
  //   });
  // });
});
