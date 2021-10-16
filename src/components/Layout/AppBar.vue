<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="$store.dispatch('setNav', !$store.state.layout.nav)" v-if="$vuetify.breakpoint.lgAndDown || $store.state.user.auth.status"/>
    <v-app-bar-title>UltiCloud</v-app-bar-title>
    <v-spacer/>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp">
      <v-icon left>mdi-open-in-new</v-icon>
      管理员面板
    </v-btn>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp">
      <v-icon left>mdi-open-in-new</v-icon>
      UltiKits主站
    </v-btn>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp">
      <v-icon left>mdi-open-in-new</v-icon>
      使用文档
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar"
}
</script>

<style scoped>

</style>