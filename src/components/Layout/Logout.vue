<template>
  <v-bottom-sheet v-model="$store.state.layout.logout" inset>
    <v-sheet class="text-center" height="200px">
      <v-btn class="mt-6" text color="error" @click="logout">
        <v-icon>mdi-logout</v-icon>
        退出登录
      </v-btn>
      <div class="my-3">
        你确定要退出登录吗
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout: function () {
      this.auth.logout(this)
    }
  }
}
</script>

<style scoped>

</style>