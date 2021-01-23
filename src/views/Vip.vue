<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-alert text color="info">
          <h3 class="headline">免费体验UltiKits会员!</h3>
          <div>每一个新用户都可以免费领取3天的UltiKits的Pro会员!<br>不试试,如何知道好不好?</div>
          <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
          <v-row align="center" no-gutters>
            <v-col class="grow">
              需要通过邮箱验证才能领取<br>已是UltiKits会员不可领取
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="shrink">
              <v-btn color="info" outlined>点击领取 (*3天会员)</v-btn>
            </v-col>
          </v-row>
        </v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-toolbar flat color="deep-orange" dark>
            <v-toolbar-title>我的会员<v-chip class="ma-2" color="primary">普通会员  到期: 无</v-chip></v-toolbar-title>
          </v-toolbar>
          <v-tabs vertical>
            <v-tab><v-icon left>mdi-cart</v-icon>购买/续费</v-tab>
            <v-tab><v-icon left>mdi-barcode-scan</v-icon>兑换</v-tab>
            <v-tab><v-icon left>mdi-arrow-up-bold-hexagon-outline</v-icon>升级</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <p>选择时长</p>
                      <v-btn-toggle v-model="time" tile color="deep-purple accent-3" group>
                        <v-btn value="30">30天</v-btn>
                        <v-btn value="90">90天</v-btn>
                        <v-btn value="180">180天</v-btn>
                        <v-btn value="365">365天</v-btn>
                        <v-btn value="permanent">永久(无到期时间)</v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <p>优惠&抵扣</p>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field label="在这里输入您的优惠码" filled></v-text-field>
                    </v-col>
                    <v-col cols="6">
                      <v-switch v-model="balance" label="使用余额抵扣" inset></v-switch>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <h3>总计: {{ total + " CNY" }} <v-chip class="ma-2" color="primary">折扣 - {{ discount }} CNY</v-chip></h3>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <p>支付方式</p>
                      <v-btn-toggle v-model="payment" tile color="teal accent-3" group>
                        <v-btn value="WechatPay">微信支付</v-btn>
                        <v-btn value="Alipay">支付宝支付</v-btn>
                      </v-btn-toggle>
                      <v-btn color="primary" elevation="2" block :disabled="!time||!payment">{{ buy }}{{ payment }}</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <p>使用兑换码</p>
                      <v-text-field label="在这里输入您的兑换码" filled></v-text-field>
                      <v-btn color="primary" elevation="2" block>兑换</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <h3 class="headline">现可授权服务器数: 0 <v-chip class="ma-2" color="primary">已授权: 0</v-chip></h3>
                    </v-col>
                  </v-row>
                  <v-divider></v-divider>
                  <v-row>
                    <v-col cols="12">
                      <v-btn color="primary" elevation="2" block disabled>请先成为会员后再升级</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Vip",
  data() {
    return {
      time: null,
      payment: null,
      balance: true,
      total: NaN,
      discount: 0.00,
      buy: "购买",
    }
  },
  watch: {
    "time": function () {
      switch (this.time) {
        case "30":
          this.total = 20.00;
          break;
        case "90":
          this.total = 60.00;
          break;
        case "180":
          this.total = 120.00;
          break;
        case "365":
          this.total = 240.00;
          break;
        default:
          this.total = NaN;
      }
    }
  }
}
</script>

<style scoped>

</style>