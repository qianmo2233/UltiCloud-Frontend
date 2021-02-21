<template>
  <v-toolbar-items class="mb-1">
    <v-card width="700" color="indigo" elevation="0">
      <v-col cols="12">
        <v-text-field label="全局搜索..." solo-inverted flat prepend-inner-icon="mdi-magnify"/>
      </v-col>
    </v-card>
  </v-toolbar-items>
</template>

<script>
export default {
name: "GlobalSearch"
}
</script>

<style scoped>

</style>