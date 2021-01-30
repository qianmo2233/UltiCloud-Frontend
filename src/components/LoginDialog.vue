<template>
  <v-dialog v-model="LoginForm.dialog" width="500" persistent>
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
      <v-card-text>
        <v-tabs fixed-tabs>
          <v-tab><v-icon>mdi-login</v-icon>登录</v-tab>
          <v-tab><v-icon left>mdi-account-multiple-plus</v-icon>注册</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-text-field label="用户名" filled v-model="LoginForm.username"></v-text-field>
                <v-text-field label="密码" filled type="password" v-model="LoginForm.password"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-close</v-icon>关闭</v-btn>
                <v-btn large color="blue darken-1" text @click="Auth"><v-icon left>mdi-check</v-icon>登录</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-text-field label="电子邮箱" filled></v-text-field>
              <v-text-field label="用户名" filled></v-text-field>
              <v-text-field label="密码" filled type="password"></v-text-field>
              <v-text-field label="重复密码" filled type="password"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-close</v-icon>关闭</v-btn>
              <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-check</v-icon>注册</v-btn>
            </v-card-actions>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "LoginDialog",
  data() {
    return {
      LoginForm: {
        dialog: false,
        show: true,
        LoginUrl: "http://panel.ultikits.com:8080",
        RegUrl: "http://panel.ultikits.com:8082",
        loading: false,
        username: '',
        password: '',
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
    "LoginForm.dialog": function () {
      if (!this.LoginForm.dialog) {
        this.LoginForm.show = true
      }
    }
  },
  methods: {
    Login: function () {
      this.LoginForm.show = false
      //
    },
    Auth: function () {

      const basic = require('basic-authorization-header');
      const auth = basic('client', '112233')
      this.$http.post(
          this.LoginForm.LoginUrl,
          {
            grant_type: 'password',
            scope: 'all',
            username: this.LoginForm.username,
            password: this.LoginForm.password
          },
          {
            headers: {
              Authorization: auth
            }
          }
      ).then(function (result) {
        let body = result.text()
        let json = JSON.parse(body)
        console.log(json.access_token)
      })
    }
  }
}
</script>
<style scoped>

</style>