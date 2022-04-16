<template>
  <v-card elevation="12" rounded>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col col="12">
            <v-subheader>
              语言设置 Language
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-select outlined/>
          </v-col>
        </v-row>
        <v-row>
          <v-col col="12">
            <v-subheader>
              主题设置 Theme
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-radio-group row v-model="theme" mandatory>
              <v-radio label="浅色主题" :value="0"/>
              <v-col cols="12" lg="4" md="4" sm="12">
                <v-skeleton-loader type="article, actions" light boilerplate elevation="6"/>
              </v-col>
              <v-radio label="深色主题" :value="1"/>
              <v-col cols="12" lg="4" md="4" sm="12">
                <v-skeleton-loader type="article, actions" dark boilerplate elevation="6"/>
              </v-col>
              <v-radio label="跟随系统设置" :value="2"/>
            </v-radio-group>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Style",
  data: () => {
    return {
      theme: 2
    }
  },

  created() {
    this.theme = parseInt(localStorage.getItem('theme'))
  },
  watch: {
    theme() {
      localStorage.setItem('theme', this.theme.toString())
      switch (this.theme) {
        case 0 :
          this.$vuetify.theme.dark = false
          break
        case 1 :
          this.$vuetify.theme.dark = true
          break
        case 2 :
          this.$vuetify.theme.dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      }
    }
  }
}
</script>

<style scoped>

</style>