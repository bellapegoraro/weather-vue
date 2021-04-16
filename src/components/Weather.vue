<template>
  <div id="container-weather" v-if="getCurrentWeather.length !== 0">
    <Card :weather="getCurrentWeather" />
    <Card v-for="next in getFiveDaysWeather" :key="next.name" :weather="next" />
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

<style>
#container-weather {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  #container-weather {
    justify-content: center;
    width: 80%;
  }
}

@media (min-width: 1000px) {
  #container-weather {
    width: 50%;
    justify-content: center;
  }
}
</style>
