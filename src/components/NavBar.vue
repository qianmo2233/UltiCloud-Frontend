<template>
  <v-navigation-drawer app v-model="$store.state.NavBar.drawer" id="nav" mini-variant expand-on-hover>
    <NoticeCard/>
    <v-container v-show="false">
      <SiteSetting/>
    </v-container>
    <LoginDialog/>
    <UserDialog/>
    <v-divider/>
    <v-list nav dense>
      <v-list-item v-for="(item, i1) in $store.state.NavItems.items1" link :key="'i1-'+i1" :to="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $i18n.t(item.text) }}</v-list-item-title>
      </v-list-item>
      <v-list-item v-for="(item, i2) in $store.state.NavItems.items2" link :key="'i2-'+i2" :to="item.url">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ $i18n.t(item.text) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import NoticeCard from "@/components/NoticeCard";
import SiteSetting from "@/components/SiteSetting";
import LoginDialog from "@/components/LoginDialog";
import UserDialog from "@/components/UserDialog";
export default {
  name: "NavBar",
  components: {UserDialog, LoginDialog, SiteSetting, NoticeCard},
  data() {
    return {
    }
  },
  watch: {
  },
}
</script>

<style scoped>
#nav {
  overflow: hidden !important;
}
</style>