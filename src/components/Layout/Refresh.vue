<template>
  <v-tooltip bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon @click="refresh" v-bind="attrs" v-on="on" :loading="$store.state.layout.refresh"><v-icon>mdi-refresh</v-icon></v-btn>
    </template>
    <span>刷新</span>
  </v-tooltip>
</template>

<script>
export default {
  name: "Refresh",
  methods: {
    refresh() {
      this.$store.dispatch('layout/setRefresh', true)
      this.$Init.boot(this, function (that) {
        that.$SnackBar.Launch(that, '刷新完毕')
      })
    }
  }
}
</script>

<style scoped>

</style>