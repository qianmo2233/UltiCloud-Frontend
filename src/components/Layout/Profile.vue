<template>
  <div>
    <v-card class="rounded-0" flat :loading="$store.state.layout.refresh">
      <v-card-title>
        <v-avatar color="indigo" class="elevation-6" v-ripple>
          <v-icon dark>mdi-account</v-icon>
        </v-avatar>
        <p class="ml-3 mt-4">{{ $store.state.user.profile.username }}</p>
      </v-card-title>
      <v-card-text>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip label color="blue" dark class="mb-1 elevation-6" v-ripple v-on="on" v-bind="attrs">级别: {{ $t(pro) }}</v-chip>
          </template>
          <span>这是您的会员等级</span>
        </v-tooltip>
        <br/>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-chip label color="blue" dark class="mt-1 elevation-6" v-ripple v-on="on" v-bind="attrs">到期时间: {{ $store.state.user.member.exp }}</v-chip>
          </template>
          <span>这是您的会员到期时间<br/>如果为"-"则为普通会员</span>
        </v-tooltip>
      </v-card-text>
    </v-card>
    <v-divider/>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    pro() {
      return this.$store.state.user.member.pro === 'true' ? 'Pro Member' : 'Normal Member'
    }
  }
}
</script>

<style scoped>

</style>