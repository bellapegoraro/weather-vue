<template>
  <v-card
    class="my-3 mx-2"
    max-width="240"
    max-height="340"
    color="orange lighten-3"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline" v-if="weather.name"
          >{{ weather.name }}, agora
        </v-list-item-title>
        <v-list-item-title class="headline" v-if="weather.dt_txt">
          {{ weather.dt_txt | data }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row align="center">
        <v-col cols="6">
          <strong>Max:</strong>
        </v-col>
        <v-col cols="6">
          <strong> {{ weather.main.temp_max }}&deg;C</strong>
        </v-col>
        <v-col cols="6">
          <strong>Min:</strong>
        </v-col>
        <v-col cols="6">
          <strong> {{ weather.main.temp_min }}&deg;C</strong>
        </v-col>
        <v-col cols="5">
          <strong>
            {{
              weather.weather[0].description.replace(/\b\w/g, (l) =>
                l.toUpperCase()
              )
            }}</strong
          >
        </v-col>
        <v-col cols="6">
          <v-img
            :src="
              `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
            "
            alt="weather image"
            width="80"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>
    <v-list-item>
      <v-list-item-subtitle> <strong>Umidade:</strong></v-list-item-subtitle>
      <v-list-item-icon class="mr-4"> </v-list-item-icon>
      <v-list-item-subtitle>{{ weather.main.humidity }}%</v-list-item-subtitle>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
};
</script>
