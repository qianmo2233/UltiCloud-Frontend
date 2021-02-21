<template>
  <v-dialog v-model="$store.state.auth.dialog" persistent fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card flat color="indigo" class="rounded-0">
      <v-toolbar flat dark color="indigo" class="rounded-0">
        <v-toolbar-title><v-icon left class="mb-1">mdi-cube-outline</v-icon>UltiCloud</v-toolbar-title>
        <v-spacer/>
        <v-toolbar-items class="float-right">
          <v-col cols="7" class="float-right">
            <v-select
                class="float-right"
                prepend-inner-icon="mdi-translate"
                label="Languages"
                background-color="indigo"
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
      </v-toolbar>
      <v-container>
        <v-row class="mb-15" v-if="$vuetify.breakpoint.lgAndUp" />
        <v-row class="align-center">
          <v-col sm="12" lg="6">
            <v-row>
              <v-col cols="12">
                <h1 class="white--text">立即登录UltiCloud</h1>
                <p class="text-caption white--text">更方便地使用UltiKits</p>
                <v-row>
                  <v-col cols="12">
                    <v-hover v-slot="{ hover }">
                      <v-banner :elevation="hover ? 24 : 6" :class="{ 'on-hover': hover }" color="white" rounded>
                        <v-list-item>
                          <v-list-item-icon><v-icon>mdi-server</v-icon></v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>管理你的服务器!</v-list-item-title>
                            <v-list-item-subtitle>只要你安装了UltiKits系列插件,那么就可以与平台对接</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-banner>
                    </v-hover>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-hover v-slot="{ hover }">
                      <v-banner :elevation="hover ? 24 : 6" :class="{ 'on-hover': hover }" color="white" rounded>
                        <v-list-item>
                          <v-list-item-icon><v-icon>mdi-key</v-icon></v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>轻松授权</v-list-item-title>
                            <v-list-item-subtitle>只需轻点一下即可完成插件授权, 安全快捷</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-banner>
                    </v-hover>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-hover v-slot="{ hover }">
                      <v-banner :elevation="hover ? 24 : 6" :class="{ 'on-hover': hover }" color="white" rounded>
                        <v-list-item>
                          <v-list-item-icon><v-icon>mdi-auto-fix</v-icon></v-list-item-icon>
                          <v-list-item-content>
                            <v-list-item-title>敬请期待</v-list-item-title>
                            <v-list-item-subtitle>还有更多的功能还在开发中,拭目以待吧</v-list-item-subtitle>
                          </v-list-item-content>
                        </v-list-item>
                      </v-banner>
                    </v-hover>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-col>
          <v-col sm="12" lg="6">
            <v-row>
              <v-col cols="12">
                <v-alert border="left" colored-border type="info" elevation="6">
                  如果您曾经购买了Pro,那么请新注册一个账号,用户名为您当初购买时注册的用户名,也就是配置文件中的用户名
                </v-alert>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-tabs fixed-tabs color="indigo" class="elevation-12">
                  <v-tab :disabled="$store.state.auth.loading"><v-icon left>mdi-login</v-icon>登录</v-tab>
                  <v-tab :disabled="$store.state.auth.loading"><v-icon left>mdi-account-plus</v-icon> 注册</v-tab>
                  <v-tab-item>
                    <Login/>
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
export default {
  name: "Auth",
  components: {Login},
  data() {
    return {
    }
  },
}
</script>

<style scoped>

</style>