<template>
  <v-app>
    <Header />

    <Weather />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Weather from "./components/Weather";
// import Home from "./components/Home";

export default {
  components: { Header, Weather },
};
</script>
