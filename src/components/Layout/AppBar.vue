<template>
  <v-app-bar color="indigo" dark app>
    <v-app-bar-nav-icon @click="$store.dispatch('setNav', !$store.state.layout.nav)" v-if="$store.state.user.auth.status"/>
    <v-app-bar-title>UltiCloud</v-app-bar-title>
    <global-search/>
    <v-spacer/>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp" @click="ServiceStatus">
      <v-icon left>mdi-new-box</v-icon>
      新功能
    </v-btn>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp" @click="MainSite">
      <v-icon left>mdi-open-in-new</v-icon>
      UltiKits主站
    </v-btn>
    <v-btn text v-if="$vuetify.breakpoint.lgAndUp" @click="Doc">
      <v-icon left>mdi-open-in-new</v-icon>
      使用文档
    </v-btn>
  </v-app-bar>
</template>

<script>
import GlobalSearch from "@/components/Layout/GlobalSearch";
import Driver from "driver.js";
export default {
  name: "AppBar",
  components: {GlobalSearch},
  methods: {
    MainSite: function () {
      window.open('https://ultikits.com/', '_blank', '')
    },
    Doc: function () {
      window.open('https://doc.ultitools.ultikits.com/', '_blank', '')
    },
    ServiceStatus: function () {
      const driver = new Driver();
      driver.highlight({
        element: '#res',
        popover: {
          title: '未来的新功能',
          description: '将来这里会有许多使用的新功能，包括旧数据转换，可视化配置等',
          // 位置支持设置为 left, left-center, left-bottom, top,
          // top-center, top-right, right, right-center, right-bottom,
          // bottom, bottom-center, bottom-right, mid-center
          position: 'right',
        }
      });
    }
  }
}
</script>

<style scoped>

</style>