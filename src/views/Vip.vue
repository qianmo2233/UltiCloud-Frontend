<template>
  <div>
    <v-row>
      <v-col cols="12">
        <EvalCard/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-overlay :absolute="true" :value="!$store.state.user.status" :opacity="0.8">
            <p class="display-1 text--primary">
              请先登录
            </p>
          </v-overlay>
          <v-toolbar flat>
            <v-toolbar-title>
              我的会员
              <v-chip class="ma-2" color="primary">
                {{ $i18n.t($GetPro.is()) }}
              </v-chip>
              <v-chip class="ma-2" color="primary">
                {{ $GetPro.exptime() }}
              </v-chip>
            </v-toolbar-title>
          </v-toolbar>
          <v-tabs>
            <v-tab><v-icon left>mdi-cart</v-icon>购买/续费</v-tab>
            <v-tab><v-icon left>mdi-barcode-scan</v-icon>兑换</v-tab>
            <v-tab><v-icon left>mdi-arrow-up-bold-hexagon-outline</v-icon>升级</v-tab>
            <v-tab><v-icon left>mdi-cash-register</v-icon>账单</v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <p>选择时长</p>
                      <v-btn-toggle v-model="time" tile color="deep-purple accent-3" group>
                        <v-btn value="30-Pro会员">30天</v-btn>
                        <v-btn value="90-Pro会员">90天</v-btn>
                        <v-btn value="180-Pro会员">180天</v-btn>
                        <v-btn value="365-Pro会员">365天</v-btn>
                      </v-btn-toggle>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <p>优惠</p>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="在这里输入您的优惠码(开发中)" filled disabled="disabled"></v-text-field>
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
                      <v-alert border="left" colored-border type="info" elevation="6">
                        目前仅支持支付宝支付,如需其他支付方式,请联系管理员
                      </v-alert>
                      <v-btn-toggle v-model="payment" tile color="teal accent-3" group>
                        <v-btn value="WechatPay" disabled>微信支付</v-btn>
                        <v-btn value="Alipay">支付宝支付</v-btn>
                      </v-btn-toggle>
                      <v-btn color="primary" elevation="6" block :disabled="!time||!payment||pay.loading" @click="create" :loading="pay.loading">{{ buy }}{{ payment }}</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-alert border="left" colored-border type="info" elevation="6">
                          永久会员请在下方输入激活码
                        </v-alert>
                        <v-alert border="left" colored-border type="info" elevation="6">
                          如果您无法在线支付，那么您可以找管理员购买兑换码进行兑换
                        </v-alert>
                      </v-col>
                      <v-col cols="12">
                        <p>使用兑换码</p>
                        <v-text-field label="在这里输入您的兑换码" filled v-model="cdk.key" :disabled="cdk.loading"></v-text-field>
                        <v-btn color="primary" elevation="2" block :disabled="cdk.loading" :loading="cdk.loading" @click="active">兑换</v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <v-row>
                    <v-col cols="12">
                      <h3 class="headline">现可授权服务器数: {{ $store.state.user.maxServer }}</h3>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn color="primary" elevation="2" block disabled>升级功能正在开发中</v-btn>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-alert border="left" colored-border type="warning" elevation="6" color="red">
                      如果没有显示数据，可以尝试刷新页面
                    </v-alert>
                    <v-alert border="left" colored-border type="success" elevation="6" color="green">
                      支付后,点击"我已完成支付"按钮,待查询成功后将自动开通Pro会员
                    </v-alert>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-data-table :headers="headers" :items="$store.state.payment" :items-per-page="5" class="elevation-0"></v-data-table>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog width="70%" v-model="dialog" persistent>
      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6" class="text-center">
                <v-col cols="12">
                  <h1>订单支付</h1>
                </v-col>
                <v-col cols="12">
                  <vue-qr :text="pay.url"></vue-qr>
                  <p class="text-caption">请使用手机支付宝扫描上方二维码进行支付</p>
                </v-col>
                <v-col cols="12">
                  <v-btn block color="teal" @click="window.open(pay.url, '_blank')"><v-icon left>mdi-launch</v-icon>转跳到支付宝</v-btn>
                  <p class="text-caption">如果您正在使用手机</p>
                </v-col>
              </v-col>
              <v-col cols="1">
                <v-divider vertical></v-divider>
              </v-col>
              <v-col cols="5">
                <v-col cols="12" class="text-center">
                  <h1>订单状态</h1>
                </v-col>
                <v-col cols="12">
                  <v-alert border="left" colored-border type="warning" elevation="6" color="red">
                    订单在发起15分钟之后将会被关闭，请及时支付
                  </v-alert>
                </v-col>
                <v-col cols="12">
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>订单金额</v-list-item-title>
                      <v-list-item-subtitle>{{ pay.amount }}</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>订单号</v-list-item-title>
                      <v-list-item-subtitle>{{ pay.id }}</v-list-item-subtitle>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="6">
                      <v-btn color="green" block :disabled="loading" :loading="loading" @click="check"><v-icon left>mdi-check</v-icon>我已完成支付</v-btn>
                    </v-col>
                    <v-col cols="6">
                      <v-btn color="red" block :disabled="loading" :loading="loading" @click="cancel"><v-icon left>mdi-close</v-icon>取消订单</v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import EvalCard from "@/components/EvalCard";
import vueQr from 'vue-qr'
export default {
  name: "Vip",
  components: {EvalCard, vueQr},
  data() {
    return {
      time: null,
      payment: null,
      total: NaN,
      discount: 0.00,
      buy: "购买",
      dialog: false,
      loading: false,
      cdk: {
        key: '',
        loading: false,
      },
      pay: {
        id: '',
        url: '',
        amount: '',
        loading: false
      },
      headers: [
        {text: '订单号', value: 'tradeId', align: 'start' },
        { text: '创建时间', value: 'createDate' },
        { text: '描述', value: 'description' },
        { text: '金额', value: 'amount' },
        { text: '状态', value: 'tradeStatus' },
      ],
    }
  },
  watch: {
    "time": function () {
      switch (this.time) {
        case "30-Pro会员":
          this.total = 20.00;
          break;
        case "90-Pro会员":
          this.total = 60.00;
          break;
        case "180-Pro会员":
          this.total = 120.00;
          break;
        case "365-Pro会员":
          this.total = 240.00;
          break;
        default:
          this.total = NaN;
      }
    }
  },
  created() {
    if (this.$store.state.user.status) {
      this.$GetPayment.all(this)
    }
  },
  methods: {
    create: function () {
      this.$GetPayment.create(this, this.total, this.time)
    },
    check: function () {
      this.$GetPayment.check(this, this.pay.id)
    },
    cancel: function () {
      this.$GetPayment.cancel(this, this.pay.id)
    },
    active: function () {
      this.$Cdk.active(this, this.cdk.key)
    }
  }
}
</script>

<style scoped>

</style>