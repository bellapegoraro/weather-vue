<template>
  <div id="container" v-if="getCurrentWeather.length !== 0">
    <Card :getCurrentWeather="getCurrentWeather" />
  </div>
</template>

<script>
import Card from "./Card";
export default {
  components: { Card },
  computed: {
    getCurrentWeather() {
      return this.$store.state.weatherStore.currentWeather;
    },
    getFiveDaysWeather() {
      return this.$store.state.weatherStore.fiveDaysWeather;
    },
  },
};
</script>

<style></style>
