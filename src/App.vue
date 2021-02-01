<template>
  <v-app app>
    <SnackBar/>
    <NavBar/>
    <AppBar/>
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
import AppBar from "@/components/AppBar";
import SnackBar from "@/components/SnackBar";

export default {
  name: 'App',
  components: {
    SnackBar,
    AppBar,
    NavBar,
  },

  data: () => ({
  }),

  created() {
    console.log('欢迎来到UltiCloud!\n版本:0.0.1[BETA]')
    console.log('前端作者:千沫qianmo\n后端作者: wisdomme')
  }
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
