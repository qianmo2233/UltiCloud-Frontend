<template>
  <div class="text-center">
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" :loading="$store.state.layout.refresh">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on">mdi-account-check</v-icon>
            </template>
            <span>登录身份: {{ $store.state.user.profile.username }}</span>
          </v-tooltip>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item ripple>
          <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
          <v-list-item-title>个人</v-list-item-title>
        </v-list-item>
        <v-divider/>
        <Logout/>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Logout from "@/components/Layout/Logout";
export default {
  name: "User",
  components: {Logout}
}
</script>

<style scoped>

</style>