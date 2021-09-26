<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="3" md="8" sm="12">
        <v-card :class="$vuetify.breakpoint.lgAndUp ? 'lg-up-login-box' : 'md-down-login-box'" flat>
          <v-card-text class="text-center">
            <p class="text-h1 text--primary">404</p>
            <p>你访问了一个不存在的页面awa~</p>
            <v-btn text block class="mt-4" @click="$router.go(-1)">
              <v-icon left>mdi-keyboard-backspace</v-icon>
              返回上一个页面
            </v-btn>
            <v-btn text block class="mt-1" to="/">
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