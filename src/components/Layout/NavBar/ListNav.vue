<template>
  <v-list dense nav>
    <v-list-item link to="home">
      <v-list-item-icon>
        <v-icon>mdi-home</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>
    <v-list-item link to="server">
      <v-list-item-icon>
        <v-icon>mdi-server</v-icon>
      </v-list-item-icon>
      <v-list-item-title>Server</v-list-item-title>
    </v-list-item>
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