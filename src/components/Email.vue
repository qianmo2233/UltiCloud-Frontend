<template>
  <div>
    <v-dialog width="500px" v-model="dialog">
      <v-card>
        <v-card-title/>
        <v-card-text>
          <v-row>
            <v-col cols="12" class="text-center" style="opacity: 1">
              <h1>邮箱验证</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-alert border="left" colored-border type="info" elevation="6" color="info">
                请在下方输入六位验证码
              </v-alert>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="text-center">
              <vue-vercode ref="vercode"></vue-vercode>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="6" sm="12">
              <v-btn color="success" block @click="verify" :loading="loading" :disabled="loading"><v-icon left>mdi-check</v-icon>验证</v-btn>
            </v-col>
            <v-col lg="6" sm="12">
              <v-btn color="info" block @click="send" :disabled="loading || showtime"><v-icon left>mdi-send</v-icon>{{ showtime ? showtime : '发送' }}</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-alert text color="error" v-if="($store.state.user.emailValidated !== 'true' && $store.state.user.status)">
      <h3 class="headline">
        您还没有进行邮箱验证
      </h3>
      <div>未通过邮箱验证将会受到部分限制</div>
      <v-divider class="my-4 error" style="opacity: 0.22"></v-divider>
      <v-row align="center" no-gutters>
        <v-col class="grow">
          点击右边的的按钮进行验证
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn color="error" outlined @click="open" :loading="loading" :disabled="loading">
            验证
          </v-btn>
        </v-col>
      </v-row>
    </v-alert>
  </div>
</template>

<script>
import VueVercode from "@auspicious/vue-vercode";

export default {
  components: {VueVercode},
name: "Email",
  data() {
    return {
      dialog: false,
      loading: false,
      timeCounter: null,
      showtime: null
    }
  },
  methods: {
    async verify() {
      this.loading = true
      await this.$Email.verify(this, this.$refs.vercode.getCode())
    },
    open() {
      this.dialog = true
    },
    countDownText(s) {
      this.showtime = s + 's'
    },
    countDown(times) {
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
    send() {
      this.loading = true
      this.$Email.send(this)
    }
  },
}
</script>

<style scoped>

</style>