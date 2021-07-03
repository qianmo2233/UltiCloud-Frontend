<template>
  <v-dialog v-model="dialog" v-if="$store.state.user.status" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-list>
        <v-list-item v-bind="attrs" v-on="on" link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ $store.state.user.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
    <v-card>
      <v-card-text>
        <v-tabs fixed-tabs>
          <v-tab><v-icon left>mdi-view-dashboard</v-icon>
            {{ $i18n.t('Personal Profile') }}</v-tab>
          <v-tab><v-icon left>mdi-account-cog</v-icon>
            {{ $i18n.t('Personal Settings') }}</v-tab>
          <v-tab-item>
            <v-container>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <h1 class="text-center">{{ $store.state.user.name }}</h1>
                    </v-col>
                    <v-col cols="12">
                      <v-list>
                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon>mdi-email</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                            {{ $store.state.user.email }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            验证状态: {{ $store.state.user.emailValidated }}
                          </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon>mdi-chess-king</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                            {{ $i18n.t($GetPro.is()) }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ $i18n.t('Expire') }}： {{ $GetPro.exptime() }}
                          </v-list-item-subtitle>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-icon>
                            <v-icon>mdi-plus</v-icon>
                          </v-list-item-icon>
                          <v-list-item-title>
                            {{ $i18n.t('Join Date') }}
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            {{ $store.state.user.joinDate }}
                          </v-list-item-subtitle>
                        </v-list-item>
                      </v-list>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
              <v-btn color="red" block @click="Logout">{{ $i18n.t('Logout') }}</v-btn>
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-card flat>
                <v-card-text>
                  <v-subheader>{{ $i18n.t('Info') }}</v-subheader>
                  <v-text-field :label="$i18n.t('Username') + '(' + $i18n.t('Not Modifiable') + ')'" filled disabled v-model="$store.state.user.name"></v-text-field>
                  <v-text-field :label="$i18n.t('Email')" filled v-model="email"></v-text-field>
                  <v-btn color="blue" block :disabled="!email || loading" :loading="loading" @click="Email"><v-icon left>mdi-account-check</v-icon>
                    {{ $i18n.t('Save and verify') }}</v-btn>
                  <v-subheader>{{ $i18n.t('Password') }}</v-subheader>
                  <v-text-field :label="$i18n.t('New')" filled type="password" v-model="pwd"></v-text-field>
                  <v-btn color="blue" block :disabled="!pwd || loading" @click="Password" :loading="loading"><v-icon left>mdi-form-textbox-password</v-icon>
                    {{ $i18n.t('Modify') }}</v-btn>
                </v-card-text>
              </v-card>
            </v-container>
          </v-tab-item>
        </v-tabs>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
name: "UserDialog",
  components: {},
  data() {
  return {
    dialog: false,
    email: '',
    pwd: '',
    loading: false,
  }
  },
  methods: {
  Logout: function () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id')
    location.reload()
  },
    Password: function () {
      this.$EditProfile.password(this, this.pwd)
    },
    Email: function () {
      this.$EditProfile.email(this, this.email)
    },
  },
  created() {
  },
}
</script>

<style scoped>

</style>