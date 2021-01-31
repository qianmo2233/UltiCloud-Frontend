<template>
  <v-app-bar app absolute color="indigo" dark light>
    <v-toolbar color="indigo" dark light flat>
      <v-app-bar-nav-icon @click.stop="$store.state.drawer = !$store.state.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>UltiCloud</v-toolbar-title>
      <v-spacer></v-spacer>
      <LoginDialog/>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import LoginDialog from "@/components/LoginDialog";
export default {
  name: "AppBar",
  components: {LoginDialog},
}
</script>

<style scoped>

</style>