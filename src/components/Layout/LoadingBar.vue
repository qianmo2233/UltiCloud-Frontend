<template>
  <div class="loader-inner line-scale">
    <div :style="$vuetify.theme.dark ? '' : 'background-color: #363636!important;'"/>
    <div :style="$vuetify.theme.dark ? '' : 'background-color: #363636!important;'"/>
    <div :style="$vuetify.theme.dark ? '' : 'background-color: #363636!important;'"/>
    <div :style="$vuetify.theme.dark ? '' : 'background-color: #363636!important;'"/>
    <div :style="$vuetify.theme.dark ? '' : 'background-color: #363636!important;'"/>
  </div>
</template>

<script>
export default {
  name: "LoadingBar"
}
</script>

<style scoped>

</style>