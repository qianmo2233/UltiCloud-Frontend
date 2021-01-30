<template>
  <v-app app>
    <NavBar/>
    <vue-scroll>
      <v-main>
        <v-container fluid>
          <transition name="slide-y-reverse-transition" mode="out-in">
            <router-view/>
          </transition>
        </v-container>
      </v-main>
    </vue-scroll>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: 'App',
  components: {
    NavBar,
  },

  data: () => ({
    isActive: false,
  }),
};
</script>
<style>
body{
  -moz-user-select:none;/*火狐*/
  -webkit-user-select:none;/*webkit浏览器*/
  -ms-user-select:none;/*IE10*/
  user-select:none;
}
</style>
