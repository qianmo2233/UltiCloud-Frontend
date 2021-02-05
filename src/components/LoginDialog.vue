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
        loading: false,
        username: '',
        password: '',
      },
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
  }
}
</script>
<style scoped>

</style>