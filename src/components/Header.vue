<template>
  <div id="header">
    <v-app-bar color="teal lighten-4" class="pt-5" prominent dense>
      <div class="input" flat>
        <v-text-field
          label="Buscar Cidade"
          prepend-inner-icon="mdi-map-marker"
          required
          :rules="rules"
        ></v-text-field>
      </div>
      <div class="select">
        <v-select :items="items" label="Hora"></v-select>
      </div>
      <v-btn class="mb-3" text icon><v-icon medium>mdi-magnify</v-icon></v-btn>
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
  }),
};
</script>

<style scoped>
.input {
  width: 20%;
  margin-right: 2%;
  margin-left: 34%;
}

.select {
  width: 10%;
}
</style>
