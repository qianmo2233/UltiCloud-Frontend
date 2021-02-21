<template>
  <v-app app>
    <Auth/>
    <Nav/>
    <Bar/>
    <Snackbar/>
    <v-main>
      <v-container fluid>
        <transition name="slide-y-reverse-transition" mode="out-in">
          <router-view/>
        </transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Bar from "@/components/Layout/Bar";
import Nav from "@/components/Layout/Nav";
import Snackbar from "@/components/Layout/Snackbar";
import Auth from "@/components/Dialog/Auth";

export default {
  name: 'App',

  components: {
    Auth,
    Snackbar,
    Nav,
    Bar
  },

  data: () => ({
    //
  }),

  created() {
    this.$store.dispatch('layout/setRefresh', true)
    this.$Init.boot(this, function () {
    })
  }
};
</script>
