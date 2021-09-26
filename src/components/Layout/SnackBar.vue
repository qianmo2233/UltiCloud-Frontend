<template>
  <v-snackbar v-model="$store.state.layout.snackbar.status" :timeout="$store.state.layout.snackbar.timeout">
    {{ $store.state.layout.snackbar.text }}
    <template v-slot:action="{ attrs }">
      <v-btn color="blue" text v-bind="attrs" @click="$store.dispatch('setSnackbarStatus', false)">
        关闭
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackBar"
}
</script>

<style scoped>

</style>