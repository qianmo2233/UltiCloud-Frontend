<template>
  <div>
    <v-alert text color="info" v-if="isPro">
      <h3 class="headline">免费体验UltiKits会员!</h3>
      <div>每一个新用户都可以免费领取7天的UltiKits的Pro会员!<br>不试试,如何知道好不好?</div>
      <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
      <v-row align="center" no-gutters>
        <v-col class="grow">
          需要通过邮箱验证才能领取<br>已是UltiKits会员不可领取
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="shrink">
          <v-btn color="info" @click="getCode" outlined :disabled="loading || !$store.state.user.status || $store.state.user.emailValidated !== 'true'" :loading="loading">
            {{ getBtnText }}</v-btn>
        </v-col>
      </v-row>
    </v-alert>
    <v-dialog v-model="dialog" persistent max-width="500">
      <v-card max-width="500px">
        <v-card-title class="text-h5">您的试用代码</v-card-title>
        <v-card-text class="text-center">
          <v-alert border="left" colored-border type="info" elevation="6" color="blue">
            该代码在七天内有效，请尽快兑换
          </v-alert>
          <v-alert border="left" colored-border type="warning" elevation="6" color="red">
            此代码仅显示一次，请自行妥善保管
          </v-alert>
          <code class="font-weight-thin text-h5" style="user-select: text">{{ code }}</code>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text @click="dialog = false"><v-icon left>mdi-close</v-icon>关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EvalCard",
  data() {
    return {
      loading: false,
      dialog: false,
      code: '',
    }
  },
  computed: {
    getBtnText: function() {
      if(!this.$store.state.user.status) {
        return '请先登录'
      } else if(this.$store.state.user.emailValidated !== 'true') {
        return '请先通过邮箱验证'
      } else {
        return '免费体验'
      }
    },
    isPro: function () {
      return this.$store.state.user.pro === "false"
    }
  },
  methods: {
    getCode: function () {
      this.$Cdk.get(this, 1)
    }
  },
}
</script>

<style scoped>

</style>