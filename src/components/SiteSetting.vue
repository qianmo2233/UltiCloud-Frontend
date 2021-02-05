<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn outlined v-bind="attrs" v-on="on" block>
        {{ $i18n.t('Site Settings') }}
      </v-btn>
    </template>
    <v-card>
      <v-card-text>
        <v-container>
          <v-card flat>
            <v-card-text>
              <v-subheader>{{ $i18n.t('Appearance') }}(Beta)<v-divider inset></v-divider></v-subheader>
              <v-select
                  :items="$store.state.lang.lang"
                  filled
                  :label="$i18n.t('Language')"
                  v-model="$store.state.lang.select"
                  item-text="text" item-value="locale"
                  persistent-hint
                  return-object
              ></v-select>
              <v-select
                  :items="$store.state.style.style"
                  filled
                  :label="$i18n.t('Theme')"
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
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name: "SiteSetting",
  data() {
  return {
    StorageUsage: '',
    dialog: false,
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
    this.lang(this.$store.state.lang.select.locale)
    }
  },
  methods: {
  style : function(mode) {
    if (mode == 'auto') {
      localStorage.setItem('theme', 'auto')
      this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      localStorage.setItem('theme', mode)
      this.$vuetify.theme.dark = mode
    }
  },
    lang: function (lang) {
    this.$i18n.locale = lang
      localStorage.setItem('locale', lang)
    }
  }
}
</script>

<style scoped>

</style>