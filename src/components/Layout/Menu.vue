<template>
  <v-list nav dense>
    <v-list-item-group color="blue" v-model="$store.state.layout.group">
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          主页
        </v-list-item-title>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
name: "Menu"
}
</script>

<style scoped>

</style>