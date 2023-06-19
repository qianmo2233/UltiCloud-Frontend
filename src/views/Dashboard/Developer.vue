<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>开发者中心</h2>
      </v-col>
    </v-row>
    <transition name="slide-fade" mode="out-in">
      <v-row v-if="loading.main" class="fill-height mt-12" align-content="center" justify="center">
        <v-col cols="12" class="d-flex justify-center mt-12">
          <loading-bar/>
        </v-col>
      </v-row>
      <v-row v-else-if="developerInfo === null" class="fill-height mt-12" align-content="center" justify="center">
        <v-overlay :value="registerForm" :z-index=" registerForm ? 1000 : -999" :opacity="0.8" style="backdrop-filter: blur(16px)">
          <v-container fluid style="width: 20vw">
            <v-row>
              <v-col cols="12" class="text-center">
                <h3>仅需一步，即可成为 UltKits 开发者</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field outlined v-model="domainName" label="开发者标识"></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-row>
                  <v-col cols="6">
                    <v-btn text block :loading="loading.reg" color="blue lighten-3" @click="registerDev"><v-icon left>mdi-check</v-icon>提交</v-btn>
                  </v-col>
                  <v-col cols="6">
                    <v-btn text block color="red" :disabled="loading.reg" @click="registerForm=false"><v-icon left>mdi-close</v-icon>关闭</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-overlay>
        <v-col cols="12" class="d-flex justify-center">
          <v-img :src="require('/src/assets/img/empty.svg')" v-show="!$vuetify.theme.dark" max-height="400px" max-width="400px"/>
          <v-img :src="require('/src/assets/img/empty-dark.svg')" v-show="$vuetify.theme.dark" max-height="400px" max-width="400px"/>
        </v-col>
        <v-col class="text-h5 text-center" cols="12">
          你似乎还不是 UltiKits 开发者
        </v-col>
        <v-col class="text-h5 text-center" cols="12">
          <v-btn text @click="registerForm=true">注册成为开发者</v-btn>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col cols="12">
          <v-tabs>
            <v-tab><v-icon left>mdi-view-dashboard</v-icon>概览</v-tab>
            <v-tab><v-icon left>mdi-puzzle</v-icon>模块</v-tab>
            <v-tab-item>
              <v-container>
              </v-container>
            </v-tab-item>
            <v-tab-item>
              <v-container>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-col>
      </v-row>
    </transition>
  </v-container>
</template>

<script>
import LoadingBar from "../../components/Layout/LoadingBar.vue";

export default {
  name: "Developer",
  components: {LoadingBar},
  data: () => {
    return {
      developerInfo: null,
      domainName: "",
      registerForm: false,
      loading: {
        reg: false,
        main: false,
        list: false,
      }
    }
  } ,
  created() {
    this.getDev()
  },
  methods: {
    getDev() {
      this.loading.main = true
      this.init.check(this, () => {
        this.$http.get("https://api.v2.ultikits.com/developer/" + this.$store.state.user.profile.id).then((response) => {
          this.developerInfo = response.data
          this.loading.main = false
        }, () => {
          this.loading.main = false
        })
      })
    },
    registerDev() {
      this.loading.reg = true
      this.init.check(this, () => {
        this.$http.post(
            "https://api.v2.ultikits.com/developer/register",
            {
              "userId": this.$store.state.user.profile.id,
              "domainName": this.domainName
            },
            {
              headers: {
                //Authorization: 'Bearer ' + this.$store.state.user.auth.token.access,
              }
            }
        ).then(() => {
          this.loading.reg = false
          this.registerForm = false
          this.snackbar.Launch(this, "注册成功")
          this.$nextTick(() => {
            this.getDev()
          })
        }, (response) => {
          this.loading.reg = false
          this.snackbar.Launch(this, "注册失败: " + response.data.msg)
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
