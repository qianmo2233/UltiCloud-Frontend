<template>
  <v-app-bar app color="blue" dark light>
    <v-toolbar color="blue" dark light flat>
      <v-app-bar-nav-icon @click.stop="$store.state.NavBar.drawer = !$store.state.NavBar.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{ $route.meta.page }}</v-toolbar-title>
      <v-spacer/>
      <SiteSetting/>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import SiteSetting from "@/components/SiteSetting";
export default {
  name: "AppBar",
  components: {SiteSetting},
}
</script>

<style scoped>

</style>