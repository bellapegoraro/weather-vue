<template>
  <v-app>
    <Header @show="show" />
    <component :is="componentRender" />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Weather from "./components/Weather";
import Home from "./components/Home";

export default {
  data() {
    return {
      componentRender: "Home",
    };
  },
  components: { Header, Weather, Home },
  methods: {
    show() {
      this.componentRender = "Weather";
    },
  },
};
</script>
