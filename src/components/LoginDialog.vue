<template>
  <v-dialog v-model="LoginForm.dialog" width="500" persistent v-if="!$store.state.user.status">
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="dark" dark light large v-bind="attrs" v-on="on">
        <div>
          {{ $i18n.t('Not logged') }}
          <br>
          <div class="text-caption">
            {{ $i18n.t('Click login') }}
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
          <v-tab :disabled="LoginForm.loading"><v-icon left>mdi-login</v-icon>
            {{ $i18n.t('Login') }}</v-tab>
          <v-tab :disabled="LoginForm.loading"><v-icon left>mdi-account-multiple-plus</v-icon>
            {{ $i18n.t('Register') }}</v-tab>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-text-field :label="$i18n.t('Username')" filled v-model="LoginForm.username"></v-text-field>
                <v-text-field :label="$i18n.t('Password')" filled type="password" v-model="LoginForm.password"></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-close</v-icon>
                  {{ $i18n.t('Close') }}</v-btn>
                <v-btn large color="blue darken-1" text @click="LoginForm.loading = true" :loading="LoginForm.loading" :disabled="LoginForm.loading"><v-icon left>mdi-check</v-icon>
                  {{ $i18n.t('Login') }}</v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card-text>
              <v-text-field :label="$i18n.t('Email')" filled></v-text-field>
              <v-text-field :label="$i18n.t('Username')" filled></v-text-field>
              <v-text-field :label="$i18n.t('Password')" filled type="password"></v-text-field>
              <v-text-field :label="$i18n.t('Repeat password')" filled type="password"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-close</v-icon>
                {{ $i18n.t('Close') }}</v-btn>
              <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-check</v-icon>
                {{ $i18n.t('Register') }}</v-btn>
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
  components: {},
  data() {
    return {
      LoginForm: {
        dialog: false,
        show: true,
        loading: false,
        username: '',
        password: '',
      },
      LoginMsg: {
        LoginSuccess:'登录成功',
        LoginError:'用户名或密码错误',
        ConnErr:'登陆失败',
      },
      SnackBar: {
        snackbar: false,
        text: '',
        timeout: 2000,
      },
    }
  },
  watch: {
    "LoginForm.loading": function () {
      if (this.LoginForm.loading) {
        this.Login()
      }
      this.LoginForm.loading = false
    }
  },
  methods: {
    Login: function () {
      const url1 = 'http://panel.ultikits.com:8082/user/getToken'
      const url2 = 'http://panel.ultikits.com:8082/user/'
      this.$http.post(
          url1 + '?username=' + this.LoginForm.username + '&password=' + this.LoginForm.password,
      ).then(function (result) {
        if (result.data == "" || result.data == null) {
          this.$snackbar.Launch(this.LoginMsg.LoginError)
          return
        }
        let data = JSON.parse(JSON.stringify(result.data))
        this.$Login.login(data)
        this.$http.post(
            url2 + this.$store.state.user.id,
            {},
            {headers: {Authorization: 'Bearer ' + this.$store.state.user.token.access},}
        ).then(function (result) {
          let data = JSON.parse(JSON.stringify(result.data))
          this.$store.state.user.name = data.username
          this.$GetUser.data(data)
          this.$store.state.user.status = true
          this.LoginForm.dialog = !this.$store.state.user.status
          if (this.$store.state.user.status) {
            this.$snackbar.Launch(this.LoginMsg.LoginSuccess)
          }
        }, () => {
          this.$Login.clean()
          this.$snackbar.Launch(this.LoginMsg.ConnErr)
            }
        )
      }, (result) => {
        this.$snackbar.Launch(result.code+this.LoginMsg.ConnErr)
          }
      )
    },
  }
}
</script>
<style scoped>

</style>