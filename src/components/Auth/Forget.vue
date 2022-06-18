<template>
  <v-row class="d-flex justify-end">
    <v-col cols="12">
      <v-card flat color="rgb(0, 0, 0, 0)">
        <v-card-title>找回密码</v-card-title>
        <v-card-subtitle class="mb-6">
          按照下列步骤来找回你的密码
        </v-card-subtitle>
        <v-card-text class="text-center">
          <v-divider inset class="mb-6"/>
          <v-row>
            <v-col cols="12">
              <v-stepper v-model="e6" vertical flat>
                <v-stepper-step :complete="e6 > 1" step="1">
                  账号
                  <small>输入要找回的账号</small>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <v-text-field class="mt-3" outlined placeholder="输入账号的用户名或电子邮箱" label="用户名或电子邮箱" :rules="rules" v-model="account" :disabled="loading" :loading="loading"/>
                  <v-btn color="indigo" @click="get" :disabled="!account || loading">下一步</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2">验证</v-stepper-step>

                <v-stepper-content step="2">
                  <p>一封带有6位验证码的邮件发送至 {{ email }}<br>请在下方输入验证码</p>
                  <v-otp-input length="6" color="indigo"  @finish="verify" :disabled="loading" v-model="code" type="number"/>
                  <v-btn color="indigo" block @click="get" :disabled="showtime !== null" :loading="loading"><v-icon left>mdi-reload</v-icon>{{ showtime ? showtime : '重新发送' }}</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">
                  新密码
                </v-stepper-step>

                <v-stepper-content step="3">
                  <v-text-field class="mt-3" outlined placeholder="输入新密码" :disabled="loading" type="password" v-model="password0" :rules="rules"/>
                  <v-text-field class="mt-3" outlined placeholder="重复新密码" :disabled="loading" type="password" v-model="password1" :rules="rules"/>
                  <v-btn text color="indigo" @click="reset" :loading="loading">提交</v-btn>
                </v-stepper-content>
              </v-stepper>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Forget",
  data: () => {
    return {
      e6: 1,
      email: "",
      account: "",
      password0: "",
      password1: "",
      code: "",
      token: "",
      loading: false,
      timeCounter: null,
      showtime: null,
      rules: [
        v => !!v || '此为必填项',
      ],
    }
  },
  methods: {
    get() {
      this.loading = true
      this.forget.getCode(this.account, this, function (that, data) {
        that.loading = false
        console.log(data)
        that.email = data.email
        that.countDown(60)
        that.e6 = 2
      }, function (that, data) {
        that.snackbar.Launch(that, data.msg)
        that.loading = false
      })
    },
    verify: function () {
      this.loading = true
      this.forget.verifyCode(this.account, this.code, this, function (that, data) {
        that.token = data.token
        that.loading = false
        that.e6 = 3
        that.code = ""
      }, function (that, data) {
        that.loading = false
        that.code = ""
        that.snackbar.Launch(that, "验证失败" + data.msg)
      })
    },
    reset: function () {
      this.loading = true
      if (this.password0 !== this.password1) {
        this.loading = false
        this.password = ''
        this.passwd = ''
        this.snackbar.Launch(this, "两次密码不一致")
        return
      }
      this.forget.resetPassword(this.account, this.token, this.password1, this, function (that) {
        that.loading = false
        that.snackbar.Launch(that, "密码修改成功")
        that.$router.push({path: "/auth/login"})
      }, function (that, data) {
        that.loading = false
        that.snackbar.Launch(that, "密码修改失败" + data.msg)
        that.e6 = 1
      })
    },
    countDownText(s) {
      this.showtime = s + 's'
    },
    countDown: function(times) {
      const self = this;
      const interval = 1000;
      let count = 0;
      self.timeCounter = setTimeout(countDownStart, interval);

      function countDownStart() {
        if (self.timeCounter == null) {
          return false;
        }
        count++
        self.countDownText(times - count + 1);
        if (count > times) {
          clearTimeout(self.timeCounter)
          self.showtime = null;
        } else {
          self.timeCounter = setTimeout(countDownStart, interval)
        }
      }
    },
  }
}
</script>

<style scoped>

</style>