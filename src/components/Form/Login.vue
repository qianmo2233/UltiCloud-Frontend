<template>
  <v-row>
    <v-alert border="left" colored-border type="info" elevation="6">
      如果您曾经购买了Pro,那么请新注册一个账号,用户名为您当初购买时注册的用户名,也就是配置文件中的用户名
    </v-alert>
    <v-col cols="12">
      <v-text-field label="用户名" filled v-model="username" :disabled="loading"></v-text-field>
      <v-text-field label="密码" filled v-model="password" :type="show ? 'text' : 'password'" :disabled="loading" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
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
name: "Login",
  data() {
  return {
    username: '',
    password: '',
    loading: false,
    show: false,
  }
  },
  methods: {
  },
  watch: {
  loading() {
    if (this.loading === true) {
      let token = this.$getToken.get(this, this.username, this.password)
      this.$store.dispatch('user/setAccessToken', token.access_token)
      this.$store.dispatch('user/setRefreshToken', token.refresh_token)
      this.$store.dispatch('user/setId', token.id)
      localStorage.setItem('access_token', this.$store.state.user.auth.token.access)
      this.$getProfile.get(this, this.$store.state.user.auth.token.access, this.$store.state.user.profile.id)
      this.loading = false
    }
  }
  }
}
</script>

<style scoped>

</style>