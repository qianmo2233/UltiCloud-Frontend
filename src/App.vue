<template>
  <v-app app>
    <SnackBar/>
    <NavBar/>
    <AppBar/>
    <v-main>
    <v-container fluid>
      <transition name="slide-fade" mode="out-in">
        <router-view/>
      </transition>
    </v-container>
  </v-main>
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
    console.log('欢迎来到UltiCloud!\n版本:0.2.8[BETA]')
    console.log('前端作者:千沫qianmo\n后端作者: wisdomme')
    this.$Login.auth(this)
    this.$Init.init(this)
    let self = this
    setInterval(function () {
      self.$Login.auth(self)
    }, 10000)
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
html{
  overflow: auto!important;
}
/*
 ********************
 * Scrollbar Styles: need more cross-platform testing
 ********************
 */

.v-dialog::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar {
  height: 4px;
  width: 6px;
  background: transparent;
}

::-webkit-scrollbar-button:end:increment {
  background: transparent;
  display: none;
}
::-webkit-scrollbar-button:start:decrement {
  background: transparent;
  display: none;
}
::-webkit-scrollbar-track-piece:vertical {
  background: linear-gradient(to right, rgba(0, 0, 0, .2), rgba(0, 0, 0, .3));
}
::-webkit-scrollbar-track-piece:horizontal {
  background: linear-gradient(to bottom, rgba(0, 0, 0, .2), rgba(0, 0, 0, .3));
}
::-webkit-scrollbar-thumb:horizontal {
  background: rgba(84, 84, 84, 0.4);
  border-radius: 2px;
  display: block;
  height: 24px;
}
::-webkit-scrollbar-thumb:vertical {
  background: rgba(84, 84, 84, 0.4);
  border-radius: 3px;
  display: block;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(84, 84, 84, 1);
}
::-webkit-scrollbar-thumb:active {
  background: rgba(84, 84, 84, 1);
}
.v-dialog::-webkit-scrollbar-thumb:vertical {
  border-radius: 0 4px 4px 0;
}
.slide-fade-enter-active {
  transition: all .175s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slide-fade-leave-active {
  transition: all .075s cubic-bezier(0.165, 0.84, 0.44, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(1.5vh);
  opacity: 0;
}
</style>
