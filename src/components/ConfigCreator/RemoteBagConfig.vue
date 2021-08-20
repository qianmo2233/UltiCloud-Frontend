<template>
  <v-container>
    <v-subheader>价格设置<v-divider inset/></v-subheader>
    <v-row>
      <v-col cols="12">
        <v-text-field filled label="基本价格" prepend-inner-icon="mdi-cash"/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-switch label="启用价格递增"/>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-text-field filled label="增加倍率" prepend-inner-icon="mdi-arrow-up-bold" suffix="%"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RemoteBagConfig"
}
</script>

<style scoped>

</style>