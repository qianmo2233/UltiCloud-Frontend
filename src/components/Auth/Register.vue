<template>
  <v-row class="d-flex justify-end">
    <v-col cols="12">
      <v-card flat color="rgb(0, 0, 0, 0)">
        <v-card-title>注册新账号</v-card-title>
        <v-card-subtitle class="mb-6">
          已有账号?
          <router-link to="login">立即登录</router-link>
        </v-card-subtitle>
        <v-card-text class="text-center">
          <v-row>
            <v-divider inset class="mb-6"/>
            <v-col cols="12">
              <v-text-field clearable solo-inverted dense :disabled="loading" :rules="rules" label="邮箱" prepend-inner-icon="mdi-email" v-model="email"/>
              <v-text-field clearable solo-inverted dense :disabled="loading" :rules="rules" label="用户名" prepend-inner-icon="mdi-account" v-model="username"/>
              <v-text-field clearable solo-inverted dense :disabled="loading" :rules="rules" label="密码" placeholder="密码" type="password" v-model="password" @keydown.native="keydown($event)"/>
              <v-text-field clearable solo-inverted dense :disabled="loading" :rules="rules" label="重复密码" placeholder="重复密码" type="password" v-model="passwd" @keydown.native="keydown($event)"/>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-btn color="indigo" block depressed :loading="loading" :disabled="isAvailable" @click="verify">
                <v-icon left>mdi-plus</v-icon>
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
          <v-row>
            <v-col cols="12">
              <v-divider/>
            </v-col>
            <v-col cols="12">
              <small class="text-caption">本网站受 Google reCAPTCHA 保护, 注册即代表您接受Google的<br><a href="https://policies.google.com/privacy" target="_blank">隐私条款</a> 和 <a href="https://policies.google.com/" target="_blank">使用条款</a></small>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Register",
  data: ()=> {
    return {
      loading: false,
      email: '',
      password: '',
      username: '',
      passwd: '',
      validateCode: "",
      isValidated: false,
      rules: [
        v => !!v || '此为必填项',
      ],
    }
  },
  watch: {
    getToken() {
      this.register()
    }
  },
  methods: {
    verify: function () {
      window.grecaptcha.reset()
      window.grecaptcha.execute()
    },
    register: function () {
      this.loading = true;
      if (this.password !== this.passwd) {
        this.loading = false
        this.password = ''
        this.passwd = ''
        this.snackbar.Launch(this, "两次密码不一致")
        return
      }
      this.user.addUserInfo(this, this.email, this.username, this.password, function (that) {
        that.loading = false
        that.snackbar.Launch(that, "注册成功，请登录")
        that.email = ''
        that.username = ''
        that.password = ''
        that.passwd = ''
        that.$router.push({path: "/auth/login"})
      }, function (that, data) {
        that.loading = false
        that.snackbar.Launch(that, "注册失败：" + data.msg)
      })
    },
    keydown: function (event){
      if(event.keyCode === 32){
        event.returnValue = false
      }
    },
    getValidateCode: function (value) {
      this.validateCode = value
    }
  },
  computed: {
    isAvailable() {
      return (
          this.username === "" || this.email === "" || this.password === "" || this.passwd === ""
      )
    },
    getToken() {
      return this.$store.state.layout.captcha.token
    }
  },
}
</script>

<style scoped>

</style>