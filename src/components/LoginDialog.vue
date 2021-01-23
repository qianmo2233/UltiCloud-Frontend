<template>
  <v-dialog v-model="LoginForm.dialog" width="500">
    <v-snackbar v-model="SnackBar.snackbar" :timeout="SnackBar.timeout">
      {{ SnackBar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="SnackBar.snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="dark" dark light large v-bind="attrs" v-on="on">
        <div>
          未登录
          <br>
          <div class="text-caption">
            点击登录
          </div>
        </div>
        <v-icon dark right>
          mdi-account-circle
        </v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="headline blue">
        登录
      </v-card-title>
      <br>
      <v-card-text>
        <v-container>
          <v-text-field label="用户名" placeholder="" outlined type="" v-model="LoginForm.username"></v-text-field>
          <v-text-field label="密码" placeholder="" outlined type="password" v-model="LoginForm.password"></v-text-field>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" :loading="LoginForm.LoginLoading" :disabled="LoginForm.LoginLoading" color="secondary" @click="LoginForm.LoginLoader = 'loading'">
          登录
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      LoginForm: {
        username: '',
        password: '',
        LoginLoading: false,
        LoginLoader: null,
        dialog: false,
      },
      LoginMsg: {
        LoginSuccess:'登录成功',
        LoginError:'登陆失败',
      },
      SnackBar: {
        snackbar: false,
        text: '',
        timeout: 2000,
      },
    }
  },
  watch: {
    "LoginForm.LoginLoader": function () {
      const u = 'https://panel.ultikits.com/login'
      this.LoginForm.LoginLoading = true
      this.$http.get(u, {params: {username: this.LoginForm.username, password: this.LoginForm.password}}).then(function (res) {
        this.SnackBar.text = res.status+':'+this.LoginMsg.LoginSuccess
        this.SnackBar.snackbar = true
        this.LoginForm.dialog = false
      }, function (res) {
        this.SnackBar.text = res.status+':'+this.LoginMsg.LoginError
        this.SnackBar.snackbar = true
        this.LoginForm.dialog = true
      })
      this.LoginForm.LoginLoading = false
      this.LoginForm.LoginLoader = null
    },
  },
}
</script>
<style scoped>

</style>