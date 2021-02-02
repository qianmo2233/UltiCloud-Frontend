<template>
  <v-dialog v-model="dialog" v-if="$store.state.user.status" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn rounded color="dark" dark light large v-bind="attrs" v-on="on">
        <div>
          {{ $store.state.user.name }}
          <br>
          <div class="text-caption">
            {{ $i18n.t('Logged') }}
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
          <v-tab><v-icon left>mdi-view-dashboard</v-icon>
            {{ $i18n.t('Personal Profile') }}</v-tab>
          <v-tab><v-icon left>mdi-cog</v-icon>
            {{ $i18n.t('Site Settings') }}</v-tab>
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
                            {{ $GetPro.is() }}
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
            <SiteSetting/>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <v-card flat>
                <v-card-text>
                  <v-subheader>{{ $i18n.t('Info') }}</v-subheader>
                  <v-text-field :label="$i18n.t('Username') + '(' + $i18n.t('Not Modifiable') + ')'" filled disabled></v-text-field>
                  <v-text-field :label="$i18n.t('Email')" filled></v-text-field>
                  <v-btn color="blue" block><v-icon left>mdi-account-check</v-icon>
                    {{ $i18n.t('Save and verify') }}</v-btn>
                  <v-subheader>{{ $i18n.t('Password') }}</v-subheader>
                  <v-text-field :label="$i18n.t('Original')" filled type="password"></v-text-field>
                  <v-text-field :label="$i18n.t('New')" filled type="password"></v-text-field>
                  <v-btn color="blue" block><v-icon left>mdi-form-textbox-password</v-icon>
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
import SiteSetting from "@/components/SiteSetting";
export default {
name: "UserDialog",
  components: {SiteSetting},
  data() {
  return {
    dialog: false,
  }
  },
  methods: {
  Logout: function () {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('id')
    location.reload()
  },
  },
  created() {

  }
}
</script>

<style scoped>

</style>