<template>
  <v-navigation-drawer app v-model="$store.state.NavBar.drawer" width="280">
    <vue-scroll>
      <NoticeCard/>
      <v-lazy transition="fade-transition">
        <v-list nav dense>
          <v-list-item-group v-model="$store.state.NavBar.group" color="primary">
            <v-list-item v-for="(item, i1) in $store.state.NavItems.items1" link :key="'i1-'+i1" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
            <v-subheader>{{ $store.state.NavItems.title1 }}</v-subheader>
            <v-list-item v-for="(item, i2) in $store.state.NavItems.items2" link :key="'i2-'+i2" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-subheader>{{ $store.state.NavItems.title2 }}</v-subheader>
          <v-list-group no-action prepend-icon="mdi-puzzle" color="white">
            <template v-slot:activator>
              <v-list-item-title>{{ $store.state.NavItems.title4 }}</v-list-item-title>
            </template>
            <v-list-item-group v-model="$store.state.NavBar.group" color="primary">
              <v-list-item v-for="(item, i3) in $store.state.NavItems.items3" link :key="'i3-'+i3" :to="item.url">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.ver }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
          <v-list-group no-action prepend-icon="mdi-comment-question" color="white">
            <template v-slot:activator>
              <v-list-item-title>{{ $store.state.NavItems.title5 }}</v-list-item-title>
            </template>
            <v-list-item-group v-model="$store.state.NavBar.group" color="primary">
              <v-list-item v-for="(item, i4) in $store.state.NavItems.items4" link :key="'i4-'+i4" :to="item.url">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
          <v-list-item-group v-model="$store.state.NavBar.group" color="primary">
            <v-list-item to="/git">
              <v-list-item-icon>
                <v-icon>mdi-code-braces</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>代码仓库</v-list-item-title>
                <v-list-item-subtitle>Github</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-subheader>{{ $store.state.NavItems.title3 }}</v-subheader>
          <v-list-item-group v-model="$store.state.NavBar.group" color="primary">
            <v-list-item v-for="(item, i5) in $store.state.NavItems.items5" link :key="'i5-'+i5" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-lazy>
    </vue-scroll>
  </v-navigation-drawer>
</template>

<script>
import NoticeCard from "@/components/NoticeCard";
export default {
  name: "NavBar",
  components: {NoticeCard},
  data() {
    return {
    }
  },
  watch: {
  },
}
</script>

<style scoped>

</style>