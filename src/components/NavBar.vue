<template>
  <div>
    <v-navigation-drawer app v-model="NavBar.drawer">
      <vue-scroll>
        <NoticeCard/>
        <v-list nav dense>
          <v-list-item-group v-model="NavBar.group" color="primary">
            <v-list-item v-for="(item, i1) in NavBar.items1" link :key="'i1-'+i1" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
            <v-subheader>{{ NavBar.title1 }}</v-subheader>
            <v-list-item v-for="(item, i2) in NavBar.items2" link :key="'i2-'+i2" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
          <v-subheader>{{ NavBar.title2 }}</v-subheader>
          <v-list-group no-action prepend-icon="mdi-puzzle">
            <template v-slot:activator>
              <v-list-item-title>{{ NavBar.title4 }}</v-list-item-title>
            </template>
            <v-list-item-group v-model="NavBar.group" color="primary">
              <v-list-item v-for="(item, i3) in NavBar.items3" link :key="'i3-'+i3" :to="item.url">
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
          <v-list-group no-action prepend-icon="mdi-comment-question">
            <template v-slot:activator>
              <v-list-item-title>{{ NavBar.title5 }}</v-list-item-title>
            </template>
            <v-list-item-group v-model="NavBar.group" color="primary">
              <v-list-item v-for="(item, i4) in NavBar.items4" link :key="'i4-'+i4" :to="item.url">
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list-group>
          <v-list-item-group v-model="NavBar.group" color="primary">
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
          <v-subheader>{{ NavBar.title3 }}</v-subheader>
          <v-list-item-group v-model="NavBar.group" color="primary">
            <v-list-item v-for="(item, i5) in NavBar.items5" link :key="'i5-'+i5" :to="item.url">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </vue-scroll>
    </v-navigation-drawer>
    <v-app-bar app absolute color="indigo" dark light>
      <v-app-bar-nav-icon @click.stop="NavBar.drawer = !NavBar.drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>UltiCloud</v-toolbar-title>
      <v-spacer></v-spacer>
      <LoginDialog/>
    </v-app-bar>
  </div>
</template>

<script>
import LoginDialog from "@/components/LoginDialog";
import NoticeCard from "@/components/NoticeCard";
export default {
  name: "NavBar",
  components: {NoticeCard, LoginDialog},
  data() {
    return {
      NavBar: {
        drawer: true,
        group: null,
        title1: '管理',
        title2: 'UltiKits系列',
        title3: '关于',
        title4: '插件',
        title5: '常见问题&修复',
        items1: [
          {text: '首页', icon: 'mdi-home', url: '/'},
          {text: '会员', icon: 'mdi-chess-king', url: '/vip'},
        ],
        items2: [
          {text: '服务器', icon: 'mdi-server', url: '/server'},
          {text: '授权', icon: 'mdi-key', url: '/auth'},
        ],
        items3: [
          {text: 'UltiTools', icon: 'mdi-tools', ver: '4.2.3', url: '/tools'},
          {text: 'UltiCore', icon: 'mdi-codepen', ver: '1.1.3', url: '/core'},
          {text: 'UltiEconomy', icon: 'mdi-cash-usd', ver: '2.6.4', url: '/economy'},
          {text: 'UltiLevel', icon: 'mdi-anvil', ver: '2.1.2', url: '/level'},
        ],
        items4: [
          {text:'自主排错&修复', icon:'mdi-auto-fix', url: '/fix'},
          {text:'配置文件', icon:'mdi-file', url: '/config'},
          {text:'YAML语法快速上手', icon:'mdi-open-in-new', url: '/yaml'},
        ],
        items5: [
          {text: '制作人员', icon: 'mdi-account-multiple', url: '/maker'},
          {text: '更新记录', icon: 'mdi-update', url: '/update'},
          {text: '内容来源', icon: 'mdi-dresser', url: '/source'},
        ]
      },
    }
  },
  watch: {
    "NavBar.group": function () {
      this.drawer = true
    },
  },
}
</script>

<style scoped>

</style>