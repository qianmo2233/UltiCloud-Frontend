<template>
  <v-dialog v-model="LoginForm.dialog" width="600" persistent v-if="!$store.state.user.status">
    <template v-slot:activator="{ on, attrs }">
      <v-list>
        <v-list-item v-bind="attrs" v-on="on" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $i18n.t('Not logged') }}</v-list-item-title>
          <v-list-item-subtitle>{{ $i18n.t('Click login') }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
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
                <v-alert border="left" colored-border type="info" elevation="6">
                  如果您曾经购买了Pro,那么请新注册一个账号,用户名为您当初购买时注册的用户名,也就是配置文件中的用户名
                </v-alert>
                <v-text-field :label="$i18n.t('Username')" filled v-model="LoginForm.username" :disabled="LoginForm.loading"></v-text-field>
                <v-text-field :label="$i18n.t('Password')" filled type="password" v-model="LoginForm.password" :disabled="LoginForm.loading"></v-text-field>
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
            <v-card flat>
              <v-form ref="form" @submit.prevent="submit">
                <v-container fluid>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="form.username" :rules="rules.name" color="purple darken-2" label="用户名" required :disabled="RegLoading"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="form.email" :rules="rules.name" color="blue darken-2" label="电子邮箱" required :disabled="RegLoading"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="form.pwd1" :rules="rules.name" color="teal" label="密码" type="password" required :disabled="RegLoading"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="form.pwd2" :rules="rules.pwd2" color="teal" label="重复密码" type="password" required :disabled="RegLoading"></v-text-field>
                    </v-col>
                    <v-col cols="12" v-if="false">
                      <v-checkbox v-model="form.terms" color="green">
                        <template v-slot:label>
                          <div @click.stop="">
                            Do you accept the
                            <a href="#" @click.prevent="terms = true">terms</a>and
                            <a href="#" @click.prevent="conditions = true">conditions?</a>
                          </div>
                        </template>
                      </v-checkbox>
                    </v-col>
                  </v-row>
                </v-container>
                <v-card-actions>
                  <v-btn large color="blue darken-1" text @click="LoginForm.dialog = false"><v-icon left>mdi-close</v-icon>
                    {{ $i18n.t('Close') }}</v-btn>
                  <v-btn large color="blue darken-1" text @click="submit" :loading="RegLoading" :disabled="!formIsValid"><v-icon left>mdi-check</v-icon>
                    {{ $i18n.t('Register') }}</v-btn>
                </v-card-actions>
              </v-form>
              <v-dialog v-model="terms" width="70%">
                <v-card>
                  <v-card-title class="title">
                    Terms
                  </v-card-title>
                  <v-card-text v-for="n in 5" :key="n">
                    {{ content }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="purple" @click="terms = false">
                      Ok
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-dialog v-model="conditions" width="70%">
                <v-card>
                  <v-card-title class="title">
                    Conditions
                  </v-card-title>
                  <v-card-text v-for="n in 5" :key="n">
                    {{ content }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card>
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
    const defaultForm = Object.freeze({
      username: '',
      email: '',
      pwd1: '',
      pwd2: '',
      favoriteAnimal: '',
      terms: false,
    })
    return {
      LoginForm: {
        dialog: false,
        loading: false,
        username: '',
        password: '',
      },
      form: Object.assign({}, defaultForm),
      rules: {
        name: [val => (val || '').length > 0 || '此为必填项'],
        pwd2: [val => (val === this.form.pwd1) || '两次密码不一致']
      },
      conditions: false,
      content: '暂无',
      terms: false,
      defaultForm,
      RegLoading: false,
    }
  },
  watch: {
    "LoginForm.loading": function () {
      if (this.LoginForm.loading) {
        this.$Login.login(this, this.LoginForm.username, this.LoginForm.password)
      }
    }
  },
  methods: {
    submit () {
      this.$Register.reg(this, this.form.username, this.form.pwd1, this.form.email)
    },
  },
  computed: {
    formIsValid () {
      return (
          this.form.pwd2 &&
          this.form.pwd1 &&
          this.form.username &&
          this.form.email &&
          this.form.pwd1 === this.form.pwd2
      )
    },
  },
}
</script>
<style scoped>

</style>