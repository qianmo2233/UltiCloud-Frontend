<template>
  <v-bottom-sheet v-model="sheet" inset>
    <template v-slot:activator="{ on, attrs }">
      <v-list-item ripple v-bind="attrs" v-on="on" color="error">
        <v-list-item-icon><v-icon color="error">mdi-logout</v-icon></v-list-item-icon>
        <v-list-item-title>退出登录</v-list-item-title>
      </v-list-item>
    </template>
    <v-sheet class="text-center" height="200px">
      <v-btn class="mt-6" text color="error" @click="logout"><v-icon left>mdi-logout</v-icon>退出登录</v-btn>
      <div class="my-3">
        您确定要退出登录吗
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "Logout",
  data() {
    return {
      sheet: false
    }
  },
  methods: {
    logout() {
      this.$AuthStatus.clear()
    }
  }
}
</script>

<style scoped>

</style>