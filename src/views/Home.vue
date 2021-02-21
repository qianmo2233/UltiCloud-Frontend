<template>
  <v-row>
    <v-col cols="12">
      <v-hover v-slot="{ hover }">
        <v-alert border="left" colored-border type="info" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
          1.0.0更新: 修改了UI,修复了一些BUG
        </v-alert>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>