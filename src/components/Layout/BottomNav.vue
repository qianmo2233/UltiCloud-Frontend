<template>
  <v-bottom-navigation app :background-color="color" dark shift v-if="$store.state.user.auth.status && $vuetify.breakpoint.lgAndDown">
    <v-btn to="server">
      <span>服务器</span>
      <v-icon>mdi-server</v-icon>
    </v-btn>
    <v-btn to="home">
      <span>主页</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-btn to="pro">
      <span>会员</span>
      <v-icon>mdi-chess-king</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNav",
  data: () => ({}),
  computed: {
    color () {
      switch (this.value) {
        case 0: return 'blue-grey'
        case 1: return 'teal'
        case 2: return 'brown'
        case 3: return 'indigo'
        default: return 'blue-grey'
      }
    },
  },
}
</script>

<style scoped>

</style>