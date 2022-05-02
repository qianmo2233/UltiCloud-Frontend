<template>
  <transition name="slide-y-transition">
    <v-snackbar :timeout="-1" :value="true" top v-if="bar">
      <v-progress-circular :value="value" class="mr-3"/>
      正在下载更新
    </v-snackbar>
  </transition>
</template>

<script>

import { ipcRenderer } from 'electron'
export default {
  name: "UpdateBar",
  data: () => {
    return {
      bar: false,
      value: 0
    }
  },
  created() {
    ipcRenderer.on('b',(e,data)=>{
      console.log(data)
    })
  }
}
</script>

<style scoped>

</style>