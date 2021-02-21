<template>
  <v-list nav dense>
    <v-list-item-group color="blue" v-model="$store.state.layout.group">
      <v-list-item v-for="item in $router.options.routes" :key="item.name" :to="item.path">
        <v-list-item-icon>
          <v-icon>{{ item.meta.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ $t(item.name) }}
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