<template>
  <v-container>
    <router-view/>
  </v-container>
</template>

<script>
export default {
  name: "AuthMain",
  beforeRouteEnter(to, from, next) {
    next(that => {
      that.init.check(that)
      if (that.$store.state.user.auth.status) {
        that.$router.push({path: "/"}).then()
      }
    })
  }
}
</script>

<style scoped>

</style>