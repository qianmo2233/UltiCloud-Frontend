<template>
  <v-app>
    <g-re-captcha/>
    <transition name="slide-x-reverse-transition" mode="out-in">
      <v-snackbar :timeout="-1" :value="true" color="indigo" bottom right multi-line v-show="this.$store.state.layout.loading.status">
        <v-progress-circular indeterminate class="mr-1"/> 正在载入数据 ({{ this.$store.state.layout.loading.progress }}%)
      </v-snackbar>
    </transition>
    <app-bar/>
    <navbar-main/>
    <snack-bar/>
    <logout/>
    <v-main :style="$store.state.user.auth.status ? '' : 'height: calc(100vh - 64px) !important;' ">
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>

import SnackBar from "@/components/Layout/SnackBar";
import Logout from "@/components/Layout/Logout";
import AppBar from "@/components/Layout/AppBar";
import NavbarMain from "@/components/Layout/NavBar/NavbarMain";
import GReCaptcha from "@/components/GReCaptcha";
export default {
  name: 'App',
  components: {GReCaptcha, NavbarMain, AppBar, Logout, SnackBar},
  data: () => ({
  }),

  created() {
    this.initTheme();
    this.initChat();
  },
  methods: {
    initTheme() {
      if (localStorage.getItem('theme') === null) localStorage.setItem('theme', '2')
      switch (localStorage.getItem('theme')) {
        case '0' :
          this.$vuetify.theme.dark = false
          break
        case '1' :
          this.$vuetify.theme.dark = true
          break
        case '2' :
          this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('prefers-color-scheme: dark').matches
      }
    },
    initChat() {
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="7dd712fd-56b8-4a20-93b1-9eb3a83c6d7b";
      let d=document;
      let s=d.createElement("script");
      s.src="https://client.crisp.chat/l.js";
      s.async=true;
      d.getElementsByTagName("head")[0].appendChild(s);
    }
  }
};
</script>
