<template>
  <v-app-bar app absolute color="indigo" dark light>
    <v-toolbar color="indigo" dark light flat>
      <v-app-bar-nav-icon @click.stop="$store.state.NavBar.drawer = !$store.state.NavBar.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>UltiCloud</v-toolbar-title>
      <v-spacer></v-spacer>
      <LoginDialog/>
      <UserDialog/>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import LoginDialog from "@/components/LoginDialog";
import UserDialog from "@/components/UserDialog";
export default {
  name: "AppBar",
  components: {UserDialog, LoginDialog},
}
</script>

<style scoped>

</style>