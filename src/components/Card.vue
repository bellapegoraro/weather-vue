<template>
  <v-card class="mx-auto" max-width="250" color="orange lighten-3">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline"
          >{{ getCurrentWeather.name }}
        </v-list-item-title>
        <!-- <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle> -->
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row align="center">
        <v-col cols="6">
          Max:
        </v-col>
        <v-col class="display-1" cols="6">
          {{ getCurrentWeather.main.temp_max }}&deg;C
        </v-col>
        <v-col cols="6">
          Min:
        </v-col>
        <v-col class="display-1" cols="6">
          {{ getCurrentWeather.main.temp_min }}&deg;C
        </v-col>
        <v-col cols="6">
          Status: {{ getCurrentWeather.weather[0].description }}
        </v-col>
        <v-col cols="6">
          <v-img
            :src="
              `http://openweathermap.org/img/wn/${getCurrentWeather.weather[0].icon}@2x.png`
            "
            alt="weather image"
            width="60"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list-item>
      <v-list-item-subtitle class="mr-6"> Umidade:</v-list-item-subtitle>
      <v-list-item-icon class="mr-4">
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle
        >{{ getCurrentWeather.main.humidity }}%</v-list-item-subtitle
      >
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    getCurrentWeather: {
      type: Object,
      required: true,
    },
  },
};
</script>
