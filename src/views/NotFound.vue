<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <v-card :class="$vuetify.breakpoint.lgAndUp ? 'lg-up-login-box' : 'md-down-login-box'" flat color="rgba(0,0,0,0)">
          <v-row>
            <v-col col="12" class="d-flex justify-center">
              <v-img :src="require('/src/assets/img/error.svg')" v-show="!$vuetify.theme.dark" max-height="600px" max-width="600px"/>
              <v-img :src="require('/src/assets/img/error-dark.svg')" v-show="$vuetify.theme.dark" max-height="600px" max-width="600px"/>
            </v-col>
          </v-row>
          <v-card-text class="text-center">
            <p>你访问了一个不存在的页面awa~</p>
            <v-btn text class="mt-4" @click="$router.go(-1)">
              <v-icon left>mdi-keyboard-backspace</v-icon>
              返回上一个页面
            </v-btn>
            <br>
            <v-btn text class="mt-1" to="/">
              <v-icon left>mdi-home</v-icon>
              返回面板主页
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style scoped>

</style>