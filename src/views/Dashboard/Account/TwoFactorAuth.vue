<template>
  <v-card elevation="12" rounded>
    <v-card-text>
      <v-container fluid>
        <v-row>
          <v-col col="12">
            <v-subheader>
              身份验证
              <v-divider inset/>
            </v-subheader>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-alert type="info" color="indigo">双重验证基于Google身份验证器，由 MoeLoli 提供服务</v-alert>
          </v-col>
        </v-row>
        <v-overlay :absolute="true" :value="!loaded" opacity="0.8">
          <v-progress-circular indeterminate/>
        </v-overlay>
        <v-row>
          <v-col cols="12">
            <v-alert :type=" $store.state.user.auth.tfa ? 'success' : 'error'" outlined prominent>
              <v-row align="center">
                <v-col>
                  {{ $store.state.user.auth.tfa ? "已启用双重验证，点击右侧按钮以停用" : "未启用双重验证，点击右侧按钮以启用" }}
                </v-col>
                <v-col class="shrink" v-if="$store.state.user.auth.tfa">
                  <v-btn text @click="disabled" :loading="loading">停用</v-btn>
                </v-col>
                <v-col class="shrink" v-else>
                  <v-btn text @click="enable" :loading="loading">启用</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-dialog v-model="dialog" width="30%" persistent :fullscreen="$vuetify.breakpoint.smAndDown">
      <v-stepper v-model="e1" color="indigo" :height="$vuetify.breakpoint.smAndDown ? '100%' : ''">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">绑定</v-stepper-step>
          <v-divider/>
          <v-stepper-step :complete="e1 > 2" step="2">验证</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card color="rgba(0,0,0,0)" flat>
              <v-card-text class="text-center">
                <v-row>
                  <v-col cols="12">
                    <h1 class="mb-3">使用Google身份验证器扫码</h1>
                    <div class="mt-3">扫码完成后点击下一步</div>
                  </v-col>
                </v-row>
                <vue-qr class="mt-3" :text="url"/>
                <p style="user-select: text">{{ secret }}</p>
                <v-row>
                  <v-col cols="12" class="mt-3">
                    <div>OR</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn text color="indigo" block>
                      <v-icon left>mdi-open-in-new</v-icon>
                      打开Google身份验证器
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-btn color="indigo" class="mr-1" @click="e1 = 2">下一步</v-btn>
            <v-btn text class="ml-1" @click="dialog = false">取消</v-btn>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card color="rgba(0,0,0,0)" flat>
              <v-card-text class="text-center">
                <v-row>
                  <v-col cols="12">
                    <h1 class="mb-3">输入身份验证器上显示的6位数字</h1>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="mt-3">
                    <v-otp-input v-model="code" :disabled="loading" plain @finish="verify"/>
                    <v-overlay absolute :value="loading">
                      <v-progress-circular indeterminate color="indigo"></v-progress-circular>
                    </v-overlay>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
            <v-btn color="indigo" class="mr-1" @click="enable" :loading="loading">重新绑定</v-btn>
            <v-btn text class="ml-1" @click="dialog = false">取消</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-dialog>
  </v-card>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  name: "TwoFactorAuth",
  components: {vueQr},
  data: () => {
    return {
      loaded: false,
      secret: '',
      url: '',
      code: '',
      loading:false,
      dialog: false,
      e1: 1,
    }
  },
  created() {
    //this.init.check(this, function (that) {
    //  that.loaded = true
    //})
  },
  methods: {
    enable: function () {
      this.loading =true
      this.tfa.create(this, function (that, data) {
        that.url = data.url
        that.secret = data.secret
        that.loading = false
        that.e1 = 1
        that.dialog = true
      }, function (that) {
        that.init.check(that, function () {
          that.tfa.create(that, function (that, data) {
            that.url = data.url
            that.secret = data.secret
            that.loading = false
            that.e1 = 1
            that.dialog = true
          }, function (that, data) {
            that.snackbar.Launch(that, "双重验证启用失败: " + data.error)
            that.e1 = 1
            that.dialog = false
            that.loading = false
          })
        })
      })
    },
    verify: function () {
      this.loading =true
      this.tfa.bind(this, this.code, this.secret, function (that, data) {
        if (data.status === "OK") {
          that.code = ''
          that.loading = false
          that.secret = ''
          that.e1 = 1
          that.dialog = false
          that.init.check(that, function () {})
          that.snackbar.Launch(that, "双重验证启用成功")
        } else {
          that.code = ''
          that.loading = false
          that.snackbar.Launch(that, "验证码错误")
        }
      }, function (that, data) {
        that.init.check(that, function () {
          that.tfa.bind(that, that.code, that.secret, function (that, data) {
            if (data.status === "OK") {
              that.code = ''
              that.loading = false
              that.secret = ''
              that.e1 = 1
              that.dialog = false
              that.init.check(that, function () {})
              that.snackbar.Launch(that, "双重验证启用成功")
            } else {
              that.code = ''
              that.loading = false
              that.snackbar.Launch(that, "验证码错误")
            }
          }, function () {
            that.code = ''
            that.loading = false
            that.snackbar.Launch(that, "验证失败: " + data.error)
          })
        })
      })
    },
    disabled: function () {
      this.loading = true
      this.tfa.remove(this, function (that) {
        that.loading = false
        that.loaded = false
        that.snackbar.Launch(that, "双重验证已停用")
        that.init.check(that, function (that) {
          that.loaded = true
        })
      }, function (that) {
        that.init.check(that, function (that) {
          that.tfa.remove(that, function (that) {
            that.loading = false
            that.loaded = false
            that.snackbar.Launch(that, "双重验证已停用")
            that.init.check(that, function (that) {
              that.loaded = true
            })
          }, function (that, data) {
            that.loading = false
            that.loaded = false
            that.snackbar.Launch(that, "双重验证停用失败: " + data.error)
            that.init.check(this, function (that) {
              that.loaded = true
            })
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
