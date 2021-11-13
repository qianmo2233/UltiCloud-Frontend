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

  created() {
    if (localStorage.getItem('theme') === null) localStorage.setItem('theme', '2')
    switch (localStorage.getItem('theme')) {
      case '0' :
        this.$vuetify.theme.dark = false
        break
      case '1' :
        this.$vuetify.theme.dark = true
        break
      case '2' :
        this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }
  }
};
</script>
