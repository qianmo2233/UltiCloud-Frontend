<template>
  <v-card class="elevation-6">
    <v-card-text>
      <div>UltiKits Unlimited</div>
      <p class="display-1 text--primary">
        {{ $i18n.t('Join UltiKitsPro Now') }}
      </p>
      <p>{{ $i18n.t('Enjoy unlimited advanced features') }}</p>
      <div class="text--primary">
        <v-overlay :absolute="true" :value="!$store.state.user.status" :opacity="0.8">
          <p class="display-1 text--primary">
            {{ $i18n.t('Please login first') }}
          </p>
        </v-overlay>
        <v-chip class="ma-2" color="primary">{{ $i18n.t('Level') }}: {{ $i18n.t($GetPro.is()) }}</v-chip>
        <v-chip class="ma-2" color="primary">{{ $i18n.t('Expire') }}: {{ $GetPro.exptime() }}</v-chip>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4" to="/vip">
        {{ $i18n.t('Renew/Purchase Pro') }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ProCard"
}
</script>

<style scoped>

</style>