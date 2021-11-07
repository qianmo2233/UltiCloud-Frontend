<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h1>会员中心</h1>
      </v-col>
    </v-row>
    <v-row class="mt-6">
      <v-col col="12">
        <h1 class="font-weight-thin">成为UltiKits Pro会员，享受更高级的功能</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-row>
          <v-col cols="12">
            <v-card color="#385F73" dark>
              <v-card-title class="text-h5">
                免费试用7天 UltiKits Pro 会员！
              </v-card-title>
              <v-card-subtitle>不试试，如何知道好不好？</v-card-subtitle>
              <v-card-actions>
                <v-btn text @click="evaluate" :loading="eval.loading" :disabled="$store.state.user.email.validated !== 'true' || $store.state.user.member.pro === 'true'">
                  {{ getBtnText }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card class="mx-auto" elevation="12">
              <v-card-text>
                <div>我的会员</div>
                <p class="text-h4 text--primary">
                  <v-chip label :color="$store.state.user.member.pro === 'true' ? 'rgb(226,89,21)' : 'primary'" dark class="mr-2">{{ $store.state.user.member.pro === 'true' ? "Pro 会员" : "普通会员" }}</v-chip>
                  <v-chip label :color="$store.state.user.member.pro === 'true' ? 'rgb(226,89,21)' : 'primary'" dark>{{ $store.state.user.member.exp }}</v-chip>
                </p>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="deep-purple accent-4">
                  Pro功能
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <v-tabs fixed-tabs>
          <v-tab>
            <v-icon left>mdi-cart</v-icon>
            购买
          </v-tab>
          <v-tab>
            <v-icon left>mdi-swap-horizontal</v-icon>
            兑换
          </v-tab>
          <v-tab>
            <v-icon left>mdi-arrow-up-bold-hexagon-outline</v-icon>
            升级
          </v-tab>
          <v-tab>
            <v-icon left>mdi-cash-register</v-icon>
            账单
          </v-tab>
          <v-tab-item>
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>选择时长<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-data-iterator :items="prices" hide-default-footer disable-pagination :loading="priceLoading">
                      <template v-slot:loading>
                        <v-row class="fill-height mt-10" align-content="center" justify="center">
                          <v-col class="subtitle-1 text-center" cols="12">
                            加载中
                          </v-col>
                          <v-col cols="6">
                            <v-progress-linear indeterminate rounded height="6"></v-progress-linear>
                          </v-col>
                        </v-row>
                      </template>
                      <template v-slot:no-data>
                        <v-row class="fill-height mt-10" align-content="center" justify="center">
                          <v-col class="subtitle-1 text-center" cols="12">
                            无法获取价格
                          </v-col>
                        </v-row>
                      </template>
                      <template v-slot:default="props">
                        <v-list-item-group mandatory color="indigo" v-model="choose">
                          <v-list-item v-for="item in props.items" :key="item.id">
                            <v-list-item-title>{{ item.name.split("_")[1] + ' 天' }}</v-list-item-title>
                            <v-list-item-subtitle>
                              <v-icon left>mdi-tag</v-icon>
                              折扣: - 0%
                            </v-list-item-subtitle>
                            <v-list-item-action-text>{{ item !== null? item.price : '0' }} CNY</v-list-item-action-text>
                          </v-list-item>
                        </v-list-item-group>
                      </template>
                    </v-data-iterator>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>优惠<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="在这里输入你的优惠码" filled :loading="false">
                      <template v-slot:append>
                        <v-chip label color="primary">已优惠 0%</v-chip>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>结算<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="6">
                        <div>总计: <h1>{{ getPrice }}</h1> CNY</div>
                      </v-col>
                      <v-col cols="6">
                        <v-btn color="primary" class="mb-2" block dark :loading="pay.loading" @click="checkout">
                          <v-icon left>mdi-credit-card</v-icon>
                          支付宝支付
                        </v-btn>
                        <v-btn color="teal" class="mt-2" block disabled>
                          <v-icon left>mdi-wechat</v-icon>
                          微信支付
                        </v-btn>
                      </v-col>
                    </v-row>
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
                    <v-subheader>使用CD-Key激活<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-alert type="info">如果您是使用其他支付方式购得一串代码，请在下方输入</v-alert>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="在这里输入你的CD-Key" filled :loading="cdk.loading" v-model="cdk.code">
                      <template v-slot:append-outer>
                        <v-btn icon :loading="cdk.loading" @click="active">
                          <v-icon>mdi-check</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>使用活动礼品码兑换<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-alert type="info">如果您是通过活动获得一串代码，请在下方输入</v-alert>
                <v-row>
                  <v-col cols="12">
                    <v-text-field label="在这里输入你的活动礼品码" filled :loading="gift.loading" v-model="gift.code">
                      <template v-slot:append-outer>
                        <v-btn icon :loading="gift.loading" @click="redeem">
                          <v-icon>mdi-check</v-icon>
                        </v-btn>
                      </template>
                    </v-text-field>
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
                    <v-alert type="warning">该功能仍在开发中</v-alert>
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
                    <v-data-table :headers="history.headers" :items="history.items" :items-per-page="10" class="elevation-0"></v-data-table>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
    <v-bottom-sheet v-model="sheet" inset persistent>
      <v-sheet min-height="200px">
        <v-container fluid>
          <v-card flat>
            <v-card-text class="text-center">
              <v-row>
                <v-col cols="12">
                  <v-alert type="info">支付后系统将自动开通Pro会员, 请勿刷新页面, 点击下方按钮来关闭订单</v-alert>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <h1>{{ pay.amount + ' CNY' }}</h1>
                  <div>打开手机支付宝扫扫一扫</div>
                </v-col>
              </v-row>
              <vue-qr :text="pay.url"/>
              <v-row>
                <v-col cols="12">
                  <div>OR</div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn text color="primary" block @click="window.open(pay.url,'_blank','');">
                    <v-icon left>mdi-open-in-new</v-icon>
                    转跳至手机支付宝
                  </v-btn>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-btn text color="red" block :loading="pay.loading" @click="cancel">
                    <v-icon left>mdi-close</v-icon>
                    取消订单
                  </v-btn>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-container>
      </v-sheet>
    </v-bottom-sheet>
    <v-dialog v-model="eval.dialog" persistent max-width="500">
      <v-card max-width="500px">
        <v-card-title class="text-h5">您的试用代码</v-card-title>
        <v-card-text class="text-center">
          <v-alert border="left" colored-border type="info" elevation="6" color="blue">
            该代码在七天内有效，请尽快兑换
          </v-alert>
          <v-alert border="left" colored-border type="warning" elevation="6" color="red">
            此代码仅显示一次，请自行妥善保管
          </v-alert>
          <code class="font-weight-thin text-h5" style="user-select: text">{{ eval.code }}</code>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue" text @click="eval.dialog = false"><v-icon left>mdi-close</v-icon>关闭</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import vueQr from 'vue-qr'
export default {
  name: "ProMain",
  components: {vueQr},
  data: () => {
    return {
      timer : 0,
      sheet: false,
      pay: {
        id: '',
        url: '',
        amount: '',
        loading: false,
      },
      choose: 0,
      prices: [],
      priceLoading: false,
      cdk: {
        code: '',
        loading: false
      },
      gift: {
        code: '',
        loading: false
      },
      eval: {
        dialog: false,
        code: '',
        loading: false
      },
      history: {
        items: [],
        headers: [
          {text: '订单号', value: 'tradeId', align: 'start' },
          { text: '创建时间', value: 'createDate' },
          { text: '描述', value: 'description' },
          { text: '金额', value: 'amount' },
          { text: '状态', value: 'tradeStatus' },
        ],
      }
    }
  },
  computed: {
    getPrice: function () {
      return this.priceLoading ? '' : this.prices[this.choose].price
    },
    getBtnText: function() {
      if(this.$store.state.user.email.validated !== 'true') {
        return '请先通过邮箱验证'
      } else if(this.$store.state.user.member.pro === 'true') {
        return '已是Pro会员'
      } else {
        return '免费体验'
      }
    },
  },

  created() {
    this.priceLoading = true
    this.pro.getAllPrice(this, function (that, data) {
      that.prices = data
      that.priceLoading = false
    }, function (that, data) {
      that.snackbar.Launch(that, "价格获取失败:" + data.msg)
      that.priceLoading = false
    })
    this.payment.GetHistory(this, function (that, data) {
      that.history.items = data
    }, function (that) {
      that.init.check(that, function () {
        that.payment.GetHistory(that, function (that, data) {
          that.history.items = data
        }, function (that, data) {
          that.snackbar.Launch(that, "历史订单获取失败: " + data.msg)
        })
      })
    })
  },

  beforeDestroy() {
    if (this.sheet) {
      window.clearInterval(this.timer)
    }
  },

  methods: {
    checkout: function () {
      let select = this.prices[this.choose];
      this.pay.loading = true
      this.payment.CreatePayment(this, select.price, select.name.split("_")[1] + '-Pro会员', function (that, data) {
        that.pay.id = data.alipay_trade_precreate_response.out_trade_no
        that.pay.amount = select.price
        that.pay.url = data.alipay_trade_precreate_response.qr_code
        that.pay.loading = false
        that.sheet = true
        that.timer = setInterval(that.check,5000);
      }, function (that) {
        that.init.check(that, function () {
          that.payment.CreatePayment(that, 0.01, select.name, function (that, data) {
            that.pay.id = data.alipay_trade_precreate_response.out_trade_no
            that.pay.amount = select.price
            that.pay.url = data.alipay_trade_precreate_response.qr_code
            that.pay.loading = false
            that.sheet = true
            that.timer = setInterval(that.check,5000);
          }, function (that, data) {
            that.snackbar.Launch(that, "订单生成失败: " + data.msg)
            that.pay.loading = false
          })
        })
      })
    },
    check: function () {
      this.payment.CheckPayment(this, this.pay.id, function (that, data) {
        if (data.alipay_trade_query_response.trade_status === 'TRADE_SUCCESS') {
          that.sheet = false
          that.snackbar.Launch(that, "订单支付成功")
          window.clearInterval(that.timer)
          that.init.check(that, function () {
            //
          })
        }
      }, function (that) {
        that.init.check(that, function () {
          //
        })
      })
    },
    cancel: function () {
      this.pay.loading = true
      this.payment.CancelPayment(this, this.pay.id, function (that) {
        that.pay.loading = false
        that.sheet = false
        that.snackbar.Launch(that, "订单取消成功")
        window.clearInterval(that.timer)
      }, function (that) {
        that.init.check(that, function () {
          that.payment.CancelPayment(that, that.pay.id, function (that) {
            that.pay.loading = false
            that.sheet = false
            that.snackbar.Launch(that, "订单取消成功")
            window.clearInterval(that.timer)
          }, function (that, data) {
            that.init.check(that, function () {
              that.pay.loading = false
              that.snackbar.Launch(that, "订单取消失败: " + data.msg)
            })
          })
        })
      })
    },
    active: function () {
      this.cdk.loading = true
      this.code.activeKey(this, this.cdk.code, function (that) {
        that.init.check(that, function () {
          that.snackbar.Launch(that, 'Pro激活成功')
          that.cdk.loading = false
        })
      }, function (that) {
        that.init.check(that, function () {
          that.code.activeKey(that, that.cdk.code, function (that) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro激活成功')
              that.cdk.loading = false
            })
          }, function (that, data) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro激活失败: ' + data.msg)
              that.cdk.loading = false
            })
          })
        })
      })
    },
    redeem: function () {
      this.gift.loading = true
      this.code.redeem(this, this.gift.code, function (that) {
        that.init.check(that, function () {
          that.snackbar.Launch(that, 'Pro兑换成功')
          that.gift.loading = false
        })
      }, function (that) {
        that.init.check(that, function () {
          that.code.redeem(that, that.gift.code, function (that) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro兑换成功')
              that.gift.loading = false
            })
          }, function (that, data) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro兑换失败: ' + data.msg)
              that.gift.loading = false
            })
          })
        })
      })
    },
    evaluate: function () {
      this.eval.loading = true
      this.code.getCode(this, 1, function (that, code) {
        that.eval.loading = false
        that.eval.code = code
        that.eval.dialog = true
        that.snackbar.Launch(that, "领取成功")
      }, function (that) {
        that.init.check(that, function () {
          that.code.getCode(that, 1, function (that, code) {
            that.eval.loading = false
            that.eval.code = code
            that.eval.dialog = true
            that.snackbar.Launch(that, "领取成功")
          }, function (that, data) {
            that.eval.loading = false
            that.snackbar.Launch(that, "领取失败" + data.msg)
          })
        })
      })
    }
  }
}
</script>

<style scoped>

</style>