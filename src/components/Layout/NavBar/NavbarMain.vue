<template>
  <v-navigation-drawer dark app v-if="$store.state.user.auth.status || $vuetify.breakpoint.lgAndDown" v-model="$store.state.layout.nav">
    <account-nav/>
    <v-divider/>
    <list-nav/>
  </v-navigation-drawer>
</template>

<script>
import AccountNav from "@/components/Layout/NavBar/AccountNav";
import ListNav from "@/components/Layout/NavBar/ListNav";
export default {
  name: "NavbarMain",
  components: {ListNav, AccountNav}
}
</script>

<style scoped>

</style>