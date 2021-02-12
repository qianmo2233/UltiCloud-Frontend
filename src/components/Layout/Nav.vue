<template>
  <v-navigation-drawer app v-model="$store.state.layout.nav">
    <Profile/>
    <Menu/>
  </v-navigation-drawer>
</template>

<script>
import Profile from "@/components/Layout/Profile";
import Menu from "@/components/Layout/Menu";
export default {
name: "Nav",
  components: {Menu, Profile}
}
</script>

<style scoped>

</style>