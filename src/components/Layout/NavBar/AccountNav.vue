<template>
  <v-list>
    <v-list-item>
      <v-list-item-avatar>
        <v-icon>mdi-account</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{ $store.state.user.profile.username }}</v-list-item-title>
        <v-list-item-subtitle>{{ $store.state.user.member.pro ? "Pro 会员" : "普通会员" }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn icon @click="$store.dispatch('setLogout', true)">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "AccountNav"
}
</script>

<style scoped>

</style>