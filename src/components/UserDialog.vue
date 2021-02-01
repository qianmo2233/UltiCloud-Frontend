<template>
  <v-btn rounded color="dark" dark light large v-if="$store.state.user.status">
    <div>
      {{ $store.state.user.name }}
      <br>
      <div class="text-caption">
        已登录
      </div>
    </div>
    <v-icon dark right>
      mdi-account-circle
    </v-icon>
  </v-btn>
</template>

<script>
export default {
name: "UserDialog"
}
</script>

<style scoped>

</style>