<template>
  <v-row>
    <v-alert border="left" colored-border type="info" elevation="6">
      如果您曾经购买了Pro,那么请新注册一个账号,用户名为您当初购买时注册的用户名,也就是配置文件中的用户名
    </v-alert>
    <v-col cols="12">
      <v-text-field label="用户名" outlined v-model="username" :disabled="loading" :rules="$store.state.auth.rules.username"></v-text-field>
      <v-text-field label="密码" outlined v-model="password" :disabled="loading" :rules="$store.state.auth.rules.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
    </v-col>
    <v-card-actions>
      <v-row>
        <v-btn text large :disabled="loading" color="red" @click="$store.dispatch('auth/setDialog', false)"><v-icon left>mdi-close-thick</v-icon>关闭</v-btn>
        <v-spacer></v-spacer>
        <v-btn text large :loading="loading" :disabled="loading" color="blue" @click="loading = !loading"><v-icon left>mdi-key</v-icon>登录</v-btn>
      </v-row>
    </v-card-actions>
  </v-row>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      loading: false,
      show: false,
    }
  },
  watch: {
    loading() {
      this.loading = true
      this.Login()
      this.loading = false
    },
  },
  methods: {
    Login () {
      if (this.username || this.password) {
        if (this.loading) {
          let TokenObject = this.$getToken.get(this, this.username, this.password)
          if (TokenObject) {
            let UserObject = this.$getProfile.get(this, TokenObject.access_token, TokenObject.id)
            this.$AuthStatus.save(this, UserObject, TokenObject.access_token, TokenObject.refresh_token)
            this.$SneckBar.Launch(this, '登录成功')
          } else {
            this.$SneckBar.Launch(this, '用户名或密码错误')
          }
        }
      } else {
        this.$SneckBar.Launch(this, '请将信息填写完整')
      }
    }
  }
}
</script>

<style scoped>

</style>