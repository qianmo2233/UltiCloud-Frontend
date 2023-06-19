<template>
  <v-row class="d-flex justify-end">
    <v-col cols="12">
      <v-card flat color="rgb(0, 0, 0, 0)">
        <v-card-title>登录UltiCloud</v-card-title>
        <v-card-subtitle class="mb-6">
        </v-card-subtitle>
        <v-expand-transition>
          <v-card-text class="text-center" v-show="!oauth">
            <v-divider inset class="mb-6"/>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="username" prepend-inner-icon="mdi-account" solo-inverted label="用户名" :disabled="loading" @keyup.enter.native="verify" clearable/>
                <v-text-field v-model="password" solo-inverted label="密码" prepend-inner-icon="mdi-key" type="password" :disabled="loading" @keydown.native="keydown($event)" @keyup.enter.native="verify" clearable/>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn color="indigo" dark block depressed @click="verify" :loading="loading">
                  <v-icon left>mdi-login</v-icon>
                  登录
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <router-link to="register" class="mr-5">注册账号</router-link>
                <router-link to="forget" class="ml-5">找回密码</router-link>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <span>OR</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn block text @click="oauth = true">
                  <v-icon left>mdi-github</v-icon>
                  使用GitHub登录
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-divider/>
              </v-col>
              <v-col cols="12">
                <small class="text-caption">本网站受 Google reCAPTCHA 保护, 登录即代表您接受Google的<br><a href="https://policies.google.com/privacy" target="_blank">隐私条款</a> 和 <a href="https://policies.google.com/" target="_blank">使用条款</a></small>
              </v-col>
            </v-row>
          </v-card-text>
        </v-expand-transition>
        <v-expand-transition>
          <v-card-text class="text-center" v-show="oauth">
            <v-divider inset class="mb-6"/>
            <v-row>
              <v-col cols="12">
                <loading-bar/>
                <p class="mt-1">正在使用GitHub登录</p>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-btn block text @click="oauth = false">
                  <v-icon left>mdi-account</v-icon>
                  使用UltiCloud账号登录
                </v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-divider/>
              </v-col>
              <v-col cols="12">
                <small class="text-caption">本网站受 Google reCAPTCHA 保护, 登录即代表您接受Google的<br><a href="https://policies.google.com/privacy" target="_blank">隐私条款</a> 和 <a href="https://policies.google.com/" target="_blank">使用条款</a></small>
              </v-col>
            </v-row>
          </v-card-text>
        </v-expand-transition>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import LoadingBar from "@/components/Layout/LoadingBar";
export default {
  name: "Login",
  components: {LoadingBar},
  data: () => {
    return {
      username: "",
      password: "",
      loading: false,
      oauth: false,
      child: null,
    }
  },
  created() {
  },
  computed: {
    getToken() {
      return this.$store.state.layout.captcha.token
    }
  },
  watch: {
    getToken() {
      this.login()
    },
    oauth() {
      if (this.oauth) {
        this.child = window.open('https://github.com/login/oauth/authorize?client_id=1dc66104f0f6737f030c&scope=user', 'newwindow', 'height=800, width=500, top=100, left=600, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no')
        let timer = setInterval(() => {
          if (this.child !== null && this.child.closed) {
            this.oauth = false
            clearInterval(timer)
          }
        })
      } else {
        if (this.child !== null && !this.child.closed) {
          this.child.close();
        }
      }
    },
  },
  methods: {
    verify: function () {
      window.grecaptcha.reset()
      window.grecaptcha.execute()
    },
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
    },
  }
}
</script>

<style scoped>

</style>
