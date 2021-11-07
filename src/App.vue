<template>
  <v-app>
    <app-bar/>
    <navbar-main/>
    <snack-bar/>
    <logout/>
    <v-main :style="$store.state.user.auth.status ? '' : 'height: calc(100vh - 64px) !important;' ">
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
    <bottom-nav/>
  </v-app>
</template>

<script>

import SnackBar from "@/components/Layout/SnackBar";
import Logout from "@/components/Layout/Logout";
import AppBar from "@/components/Layout/AppBar";
import NavbarMain from "@/components/Layout/NavBar/NavbarMain";
import BottomNav from "@/components/Layout/BottomNav";
export default {
  name: 'App',
  components: {BottomNav, NavbarMain, AppBar, Logout, SnackBar},
  data: () => ({
    //
  }),
};
</script>
