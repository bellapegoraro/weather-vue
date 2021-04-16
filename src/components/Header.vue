<template>
  <div id="header">
    <v-app-bar color="teal lighten-4" class="pt-6" prominent dense>
      <div class="input" flat>
        <v-text-field
          label="Buscar Cidade"
          prepend-inner-icon="mdi-map-marker"
          required
          :rules="rules"
          v-model="infos.city"
        ></v-text-field>
      </div>
      <div class="select">
        <v-select :items="items" label="Hora" v-model="infos.hour"></v-select>
      </div>
      <v-btn
        class="mb-3"
        text
        icon
        @click="getWeather(), $emit('show', 'Weather')"
        ><v-icon medium>mdi-magnify</v-icon></v-btn
      >
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [(value) => !!value || "Campo obrigatório."],
    items: [
      "03:00:00",
      "06:00:00",
      "09:00:00",
      "12:00:00",
      "15:00:00",
      "18:00:00",
      "21:00:00",
      "00:00:00",
    ],
    infos: {
      city: "",
      hour: "",
    },
  }),
  methods: {
    getWeather() {
      this.$store.dispatch("weatherStore/getCurrentWeather", this.infos.city);
      this.$store.dispatch("weatherStore/getFiveDaysWeather", this.infos);
    },
  },
};
</script>

<style scoped>
#header {
  margin-bottom: 10px;
}

.input {
  width: 20%;
  margin-right: 2%;
  margin-left: 33%;
}

.select {
  width: 10%;
}

@media (max-width: 1100px) {
  .input {
    margin-left: 20%;
    width: 30%;
  }

  .select {
    width: 20%;
  }
}
</style>
