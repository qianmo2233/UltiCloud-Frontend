<template>
  <v-dialog v-model="$store.state.auth.dialog" persistent fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card flat class="rounded-0" img="http://pic1.win4000.com/wallpaper/7/5992b64157821.jpg">
      <v-app-bar flat dark color="rgba(0, 0, 0, 0)" class="rounded-0">
        <v-toolbar-title><v-icon left class="mb-1">mdi-cube-outline</v-icon>UltiCloud</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items class="float-right" v-show="$vuetify.breakpoint.mdAndUp">
          <v-col cols="7">
            <v-select
                class="float-right"
                prepend-inner-icon="mdi-translate"
                label="Languages"
                background-color="rgba(0, 0, 0, 0)"
                v-model="$store.state.lang.select"
                :items="$store.state.lang.locales"
                item-text="lang"
                item-value="locale"
                return-object
                solo
                flat
            />
          </v-col>
        </v-toolbar-items>
      </v-app-bar>
      <v-container class="align-center justify-center">
        <v-row class="mb-15" v-if="$vuetify.breakpoint.mdAndUp" />
        <v-row ref="el">
          <v-col sm="12" lg="6" md="6" cols="12">
            <v-row>
              <v-col cols="12">
                <h1 class="white--text">立即登录UltiCloud</h1>
                <p class="text-caption white--text">更方便地使用UltiKits</p>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="12" lg="6" md="6">
            <v-row>
              <v-col cols="12">
                <v-tabs fixed-tabs color="indigo" class="elevation-12">
                  <v-tab :disabled="$store.state.auth.loading"><v-icon left>mdi-login</v-icon>登录</v-tab>
                  <v-tab :disabled="$store.state.auth.loading"><v-icon left>mdi-account-plus</v-icon> 注册</v-tab>
                  <v-tab-item>
                    <Login/>
                  </v-tab-item>
                  <v-tab-item>
                    <Register/>
                  </v-tab-item>
                </v-tabs>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import Login from "@/components/Form/Login";
import Register from "@/components/Form/Register";
export default {
  name: "Auth",
  components: {Register, Login},
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>