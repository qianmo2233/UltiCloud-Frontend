<template>
  <v-list dense nav>
    <div v-if="$vuetify.breakpoint.lgAndUp">
      <v-subheader>
        管理
        <v-divider inset/>
      </v-subheader>
      <v-list-item link to="home">
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>主页</v-list-item-title>
      </v-list-item>
      <v-list-item link to="server">
        <v-list-item-icon>
          <v-icon>mdi-server</v-icon>
        </v-list-item-icon>
        <v-list-item-title>服务器</v-list-item-title>
      </v-list-item>
      <v-list-item link to="pro">
        <v-list-item-icon>
          <v-icon>mdi-chess-king</v-icon>
        </v-list-item-icon>
        <v-list-item-title>会员</v-list-item-title>
      </v-list-item>
    </div>
    <div v-if="$vuetify.breakpoint.lgAndDown">
      <v-subheader>
        外部链接
        <v-divider inset/>
      </v-subheader>
      <v-list-item link>
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
        <v-list-item-icon>
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
  }
}
</script>

<style scoped>

</style>