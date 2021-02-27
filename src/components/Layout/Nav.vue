<template>
  <v-navigation-drawer app v-model="$vuetify.breakpoint.lgAndUp">
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