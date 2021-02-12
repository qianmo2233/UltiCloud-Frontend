<template>
  <v-app-bar color="indigo" app dark>
    <v-app-bar-nav-icon @click="$store.dispatch('layout/setNav', !$store.state.layout.nav)"></v-app-bar-nav-icon>
    <v-toolbar-title>UltiCloud</v-toolbar-title>
    <v-spacer></v-spacer>
    <Auth/>
  </v-app-bar>
</template>

<script>
import Auth from "@/components/Dialog/Auth";
export default {
  name: "Bar",
  components: {Auth},
  methods: {
  }
}
</script>

<style scoped>

</style>