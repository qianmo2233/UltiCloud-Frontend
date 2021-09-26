<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" lg="3" md="8" sm="12">
      <v-card class="login-box" elevation="12">
        <v-card-title>注册新账号</v-card-title>
        <v-card-subtitle class="mb-6">
          已有账号?
          <router-link to="login">立即登录</router-link>
        </v-card-subtitle>
        <v-card-text class="text-center">
          <v-row>
            <v-divider inset class="mb-6"/>
            <v-col cols="12">
              <v-text-field outlined dense label="邮箱"/>
              <v-text-field outlined dense label="用户名"/>
              <v-text-field outlined dense label="密码" type="password"/>
              <v-text-field outlined dense label="重复密码" type="password"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="primary" block depressed>
                <v-icon left>mdi-login</v-icon>
                注册
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <span>OR</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn block text>
                <v-icon left>mdi-github</v-icon>
                使用GitHub注册
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Register"
}
</script>

<style scoped>

</style>