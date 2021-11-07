<template>
  <v-list dense nav>
    <div v-if="$vuetify.breakpoint.lgAndUp">
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
      <v-subheader>
        我的 Me
        <v-divider inset/>
      </v-subheader>
      <v-list-item link to="/account">
        <v-list-item-icon>
          <v-icon>mdi-account</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>账户</v-list-item-title>
          <v-list-item-subtitle>Account</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <div v-if="$vuetify.breakpoint.lgAndDown">
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
    }
  }
}
</script>

<style scoped>

</style>