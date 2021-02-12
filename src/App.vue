<template>
  <v-app app>
    <Nav/>
    <Bar/>
    <Snackbar/>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Bar from "@/components/Layout/Bar";
import Nav from "@/components/Layout/Nav";
import Snackbar from "@/components/Layout/Snackbar";

export default {
  name: 'App',

  components: {
    Snackbar,
    Nav,
    Bar
  },

  data: () => ({
    //
  }),
};
</script>
