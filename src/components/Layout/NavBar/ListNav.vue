<template>
  <v-list dense nav>
    <div v-if="$store.state.user.auth.status">
      <v-subheader>
        管理 Manage
        <v-divider inset/>
      </v-subheader>
      <v-list-item link to="/dashboard/home">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
          <v-list-item-subtitle>Home</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/dashboard/server">
        <v-list-item-icon>
          <v-icon>mdi-server</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>服务器</v-list-item-title>
          <v-list-item-subtitle>Servers</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link to="/dashboard/pro">
        <v-list-item-icon>
          <v-icon>mdi-chess-king</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>会员</v-list-item-title>
          <v-list-item-subtitle>Professional</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <div id="res">
        <v-subheader>
          资源 Resource
          <v-divider inset/>
        </v-subheader>
        <v-list-group prepend-icon="mdi-store" color="white">
          <template v-slot:activator>
            <v-list-item-title>Marketplace</v-list-item-title>
          </template>
          <v-list-item link>
            <v-list-item-title>UltiTools</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-toolbox</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>UltiCore</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-atom</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>UltiEconomy</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-cash</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item link>
            <v-list-item-title>UltiLevel</v-list-item-title>
            <v-list-item-icon>
              <v-icon>mdi-magic-staff</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
        <v-list-item link to="tools">
          <v-list-item-icon>
            <v-icon>mdi-tools</v-icon>
          </v-list-item-icon>
          <v-list-item-title>实用工具</v-list-item-title>
        </v-list-item>
      </div>
      <v-subheader>
        我的 Me
        <v-divider inset/>
      </v-subheader>
      <v-list-item link to="/account">
        <v-list-item-icon>
          <v-icon>mdi-cog</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>设置</v-list-item-title>
          <v-list-item-subtitle>Settings</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="$vuetify.breakpoint.mdAndDown">
      <v-subheader>
        外部链接
        <v-divider inset/>
      </v-subheader>
      <v-list-item link @click="MainSite">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>UltiKits主站</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon @click="ServiceStatus">
          <v-icon>mdi-checkbox-marked-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>服务状态</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon>
          <v-icon>mdi-account-supervisor</v-icon>
        </v-list-item-icon>
        <v-list-item-title>管理面板</v-list-item-title>
      </v-list-item>
      <v-list-item link>
        <v-list-item-icon @click="Doc">
          <v-icon>mdi-file-document</v-icon>
        </v-list-item-icon>
        <v-list-item-title>使用文档</v-list-item-title>
      </v-list-item>
    </div>
  </v-list>
</template>

<script>
export default {
  name: "ListNav",
  created() {
  },
  methods: {
    MainSite: function () {
      window.open('https://ultikits.com/', '_blank', '')
    },
    Doc: function () {
      window.open('https://doc.ultitools.ultikits.com/', '_blank', '')
    },
    ServiceStatus: function () {
      window.open('https://ulti-status.crisp.watch/', '_blank', '')
    }
  }
}
</script>

<style scoped>

</style>