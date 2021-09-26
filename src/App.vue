<template>
  <v-app>
    <app-bar/>
    <navbar-main v-if="$store.state.user.auth.status"/>
    <snack-bar/>
    <logout/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import SnackBar from "@/components/Layout/SnackBar";
import Logout from "@/components/Layout/Logout";
import AppBar from "@/components/Layout/AppBar";
import NavbarMain from "@/components/Layout/NavBar/NavbarMain";
export default {
  name: 'App',
  components: {NavbarMain, AppBar, Logout, SnackBar},
  data: () => ({
    //
  }),
};
</script>
