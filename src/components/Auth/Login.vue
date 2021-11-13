<template>
  <v-row class="d-flex justify-center">
    <v-col cols="12" lg="3" md="8" sm="12">
      <v-card class="login-box" elevation="12">
        <v-card-title>登录UltiCloud</v-card-title>
        <v-card-subtitle class="mb-6">
          没有账号?
          <router-link to="register">立即注册</router-link>
        </v-card-subtitle>
        <v-card-text class="text-center">
          <v-divider inset class="mb-6"/>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="username" prepend-inner-icon="mdi-account" solo-inverted label="用户名" :disabled="loading" @keyup.enter.native="login" clearable/>
              <v-text-field v-model="password" solo-inverted label="密码" prepend-inner-icon="mdi-key" type="password" :disabled="loading" @keydown.native="keydown($event)" @keyup.enter.native="login" clearable/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="primary" block depressed @click="login" :loading="loading">
                <v-icon left>mdi-login</v-icon>
                登录
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
                使用GitHub登录
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
  name: "Login",
  data: () => {
    return {
      username: "",
      password: "",
      loading: false,
    }
  },
  methods: {
    login: function () {
      this.loading = true;
      this.auth.getToken(
          this.username,
          this.password,
          this,
          function (that, data) {
            if (Object.keys(data).length === 0) {
              that.snackbar.Launch(that, "用户名或密码错误 ")
              that.loading = false
              return;
            }
            that.auth.saveToken(data.access_token, data.refresh_token, data.id, that)
            that.user.getUserInfo(
                that.$store.state.user.auth.token.access,
                that.$store.state.user.profile.id,
                that,
                function (that, data) {
                  that.user.saveUserInfo(that, data)
                  that.snackbar.Launch(that, "登录成功")
                  that.loading = false;
                  that.$router.push({path: "/"})
                },
                function (that, data) {
                  that.snackbar.Launch(that, "登录失败: " + data.msg)
                  that.loading = false
                }
            )
          },
          function (that, data) {
            that.snackbar.Launch(that, "登录失败: " + data.msg)
            that.loading = false
          }
      )
    },
    keydown: function (event){
      if(event.keyCode === 32){
        event.returnValue = false
      }
    }
  }
}
</script>

<style scoped>

</style>