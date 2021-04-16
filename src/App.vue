<template>
  <v-app>
    <Header />
    <Weather />
    <Home />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Weather from "./components/Weather";
import Home from "./components/Home";

export default {
  components: { Header, Weather, Home },
};
</script>
