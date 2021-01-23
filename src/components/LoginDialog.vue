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
          <v-row v-if="LoginForm.show">
            <v-col cols="12">
              <v-btn elevation="5" x-large rounded block @click="Login"><v-icon left>mdi-login</v-icon>使用UltiKits账号登录</v-btn>
            </v-col>
            <v-col cols="12">
              <v-btn elevation="5" x-large rounded block><v-icon left>mdi-github</v-icon>使用Github账号登录</v-btn>
            </v-col>
          </v-row>
          <v-row>
            <iframe v-if="!LoginForm.show" v-bind:src="LoginForm.url" style="width: 100%; height: 400px; border: medium none;"></iframe>
          </v-row>
        </v-container>
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
        url: "https://panel.ultikits.com/login"
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
    }
  }
}
</script>
<style scoped>

</style>