<template>
  <v-bottom-navigation app shift v-if="$store.state.user.auth.status && $vuetify.breakpoint.lgAndDown">
    <v-btn to="/dashboard/home">
      <span>主页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="/dashboard/server">
      <span>服务器</span>
      <v-icon>mdi-server</v-icon>
    </v-btn>
    <v-btn to="/dashboard/pro">
      <span>会员</span>
      <v-icon>mdi-chess-king</v-icon>
    </v-btn>
    <v-btn to="/account">
      <span>账户</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data: () => ({}),
}
</script>

<style scoped>

</style>