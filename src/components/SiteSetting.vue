<template>
  <v-container>
    <v-card flat>
      <v-card-text>
        <v-subheader>{{ $i18n.t('Appearance') }}<v-divider inset></v-divider></v-subheader>
        <v-select
            :items="$store.state.lang.lang"
            filled :label="$i18n.t('Language')"
            v-model="$store.state.lang.select"
        ></v-select>
        <v-select
            :items="$store.state.style.style"
            filled :label="$i18n.t('Theme')"
            v-model="$store.state.style.select"
            item-text="text" item-value="mode"
            persistent-hint
            return-object
        ></v-select>
        <p class="text-caption">{{ $i18n.t('Your changes will be saved automatically') }}</p>
        <v-subheader>{{ $i18n.t('Storage') }}<v-divider inset></v-divider></v-subheader>
        <v-row>
          <v-col cols="6">
            {{ $i18n.t('Data has been stored in') }} {{ StorageUsage }}
            <br>
            {{ $i18n.t('After clearing the data, the login status and website settings will be reset') }}
          </v-col>
          <v-col cols="6">
            <v-btn color="red" block><v-icon left>mdi-delete</v-icon>
              {{ $i18n.t('Clear data') }}</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
name: "SiteSetting",
  data() {
  return {
    StorageUsage: ''
  }
  },
  created() {
    this.StorageUsage = this.$StorageUsage.Get()
  },
  watch: {
  "$store.state.style.select": function () {
    this.style(this.$store.state.style.select.mode)
  },
    "$store.state.lang.select": function () {
    this.lang(this.$store.state.lang.select.lang)
    }
  },
  methods: {
  style : function(mode) {
    if (mode == 'auto') {
      this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      this.$vuetify.theme.dark = mode
    }
  },
    lang: function (lang) {
    this.$i18n.locale = lang
    }
  }
}
</script>

<style scoped>

</style>