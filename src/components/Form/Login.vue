<template>
  <v-card>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-text-field label="用户名" prepend-icon="mdi-account" outlined v-model="username" :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.username"></v-text-field>
            <v-text-field label="密码" prepend-icon="mdi-form-textbox-password" outlined v-model="password" :disabled="$store.state.auth.loading" :rules="$store.state.auth.rules.password" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show"></v-text-field>
          </v-col>
          <v-row>
            <v-col cols="12">
              <v-btn block :loading="$store.state.auth.loading" rounded dark large color="blue" @click="Login"><v-icon left>mdi-key</v-icon>登录</v-btn>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      show: false,
    }
  },
  watch: {
  },
  methods: {
    Login () {
      this.$store.dispatch('auth/setLoading', true)
      if (this.username || this.password) {
        this.$getToken.get(this, this.username, this.password, function (that, TokenObject) {
          if (TokenObject) {
            that.$getProfile.get(that, TokenObject.access_token, TokenObject.id, function (that, UserObject) {
              that.$AuthStatus.save(that, UserObject, TokenObject.access_token, TokenObject.refresh_token)
              that.$SnackBar.Launch(that, '登录成功')
              that.$store.dispatch('auth/setLoading', false)
              that.$store.dispatch('auth/setDialog', false)
              that.$store.dispatch('layout/setRefresh', false)
            }, function (that, result) {
              that.$SnackBar.Launch(that, '登陆失败: ' + result.data)
            })
          } else {
            that.$SnackBar.Launch(that, '用户名或密码错误')
            that.$store.dispatch('auth/setLoading', false)
          }
        }, function (that, result) {
          that.$SnackBar.Launch(that, '登陆失败: ' + result.data)
          that.$store.dispatch('auth/setLoading', false)
        })
      } else {
        this.$SnackBar.Launch(this, '请将信息填写完整')
        this.$store.dispatch('auth/setLoading', false)
      }
    },
  }
}
</script>

<style scoped>

</style>