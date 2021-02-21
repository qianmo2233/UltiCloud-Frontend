<template>
  <v-app-bar color="indigo" app dark>
    <v-toolbar color="indigo" flat>
      <v-app-bar-nav-icon @click="$store.dispatch('layout/setNav', !$store.state.layout.nav)"></v-app-bar-nav-icon>
      <v-toolbar-title>UltiCloud</v-toolbar-title>
      <v-toolbar class="d-flex justify-center ml-10" color="indigo" elevation="0" v-if="$vuetify.breakpoint.lgAndUp">
        <GlobalSearch/>
      </v-toolbar>
      <v-spacer/>
      <Refresh/>
      <User/>
    </v-toolbar>
  </v-app-bar>
</template>

<script>
import User from "@/components/Layout/User";
import GlobalSearch from "@/components/Form/GlobalSearch";
import Refresh from "@/components/Layout/Refresh";

export default {
  name: "Bar",
  components: {Refresh, GlobalSearch, User},
}
</script>

<style scoped>

</style>