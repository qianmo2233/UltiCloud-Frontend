<template>
  <div>
    <v-btn color="dark" rounded large dark @click="$store.dispatch('auth/setDialog', true)">
      <v-icon left>
        mdi-account-circle
      </v-icon>
      <div>未登录<br>
        <div>点击登录</div>
      </div>
    </v-btn>
    <v-dialog v-model="$store.state.auth.dialog" v-if="!$store.state.user.auth.status" width="600px" persistent>
      <v-tabs fixed-tabs>
        <v-tab><v-icon left>mdi-login</v-icon>
          登录
        </v-tab>
        <v-tab><v-icon left>mdi-account-multiple-plus</v-icon>
          注册
        </v-tab>
        <v-tab-item>
          <v-card>
            <v-card-text>
              <v-container>
                <Login/>
              </v-container>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </div>
</template>

<script>
import Login from "@/components/Form/Login";
export default {
name: "Auth",
  components: {Login},
  data() {
  return {
  }
  }
}
</script>

<style scoped>

</style>