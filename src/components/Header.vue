<template>
  <div id="header">
    <v-app-bar>
      <div class="input">
        <v-text-field
          label="Buscar Cidade"
          prepend-inner-icon="mdi-map-marker"
          required
          :rules="rules"
        ></v-text-field>
      </div>
      <v-btn class="ma-2" text icon><v-icon medium>mdi-magnify</v-icon></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: [(value) => !!value || "Campo obrigatório."],
  }),
};
</script>

<style scoped>
#header {
  width: 100%;
  padding-top: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
}

.input {
  width: 25%;
  margin-left: 35%;
}
</style>
