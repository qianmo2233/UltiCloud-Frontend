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
            <v-card class="mt-3">
              <v-row>
                <v-col cols="7">
                  <v-card-title class="text-h5">
                    免费试用7天 UltiKits Pro 会员！
                  </v-card-title>
                  <v-card-subtitle>不试试，如何知道好不好？</v-card-subtitle>
                </v-col>
                <v-col cols="5">
                  <v-img :src="require('/src/assets/img/launch.svg')" v-show="!$vuetify.theme.dark" max-height="250px" max-width="250px"/>
                  <v-img :src="require('/src/assets/img/launch-dark.svg')" v-show="$vuetify.theme.dark" max-height="250px" max-width="250px"/>
                </v-col>
              </v-row>
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
                  <transition name="scale-transition">
                    <v-col cols="12" v-if="!priceLoading && this.promos.length !== 0">
                      <v-banner color="color-spring" rounded elevation="6" dark><v-icon left>mdi-party-popper</v-icon>春节特惠<div class="ml-12" style="display: inline"/>
                        {{ this.promos.length === 0 ? '活动已结束' : ''}}
                      </v-banner>
                    </v-col>
                  </transition>
                  <v-col cols="12" sm="=12" md="12" lg="3" v-for="item in promos" :key="item.id">
                    <v-card color="card-spring-1" dark>
                      <v-card-title>
                        <h5>{{ item.name.split('_')[2] + ' 天' }}</h5>
                        <v-chip class="ml-1" label outlined>-{{
                            (parseInt(parseInt(item.name.split('_')[2] === '365' ? '360' : item.name.split('_')[2])/30*20)-parseInt(item.price))/parseInt(parseInt(item.name.split('_')[2] === '365' ? '360' : item.name.split('_')[2])/30*20)*100
                          }}%折扣
                        </v-chip>
                      </v-card-title>
                      <v-card-subtitle><del>原价 {{ parseInt(parseInt(item.name.split('_')[2])/30*20) }} CNY</del></v-card-subtitle>
                      <v-card-actions>
                        <v-btn text @click="choose = parseInt(item.id) - 5">{{ item.price }} CNY</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-data-iterator :items="prices" hide-default-footer disable-pagination :loading="priceLoading">
                      <template v-slot:loading>
                        <v-row class="fill-height mt-10" align-content="center" justify="center">
                          <v-col cols="6" class="d-flex justify-center">
                            <loading-bar/>
                          </v-col>
                          <v-col class="subtitle-1 text-center" cols="12">
                            加载中
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
                          <v-list-item v-for="item in props.items" :key="item.id" v-show="!item.name.includes('promo')">
                            <v-list-item-title>{{ item.name.substring(item.name.length - 3).replace('_', '') + ' 天' }}</v-list-item-title>
                            <v-list-item-subtitle>{{ item !== null? item.price : '0' }} CNY</v-list-item-subtitle>
                          </v-list-item>
                        </v-list-item-group>
                      </template>
                    </v-data-iterator>
                  </v-col>
                </v-row>
                <div v-if="false">
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
                </div>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>结算<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-alert color="green" dark>
                      UltiKits现已支持<v-img :src="require('/src/assets/img/wechat-pay.svg')" max-width="150px"/>
                    </v-alert>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-row>
                      <v-col cols="4">
                        <div>总计: <h1>{{ getPrice }}</h1> CNY</div>
                      </v-col>
                      <v-col cols="8">
                        <v-btn-toggle v-model="pay.method" tile :color="getBtnColor" mandatory group class="mb-2">
                          <v-btn value="ALIPAY" block><v-icon left>mdi-credit-card-outline</v-icon>支付宝</v-btn>
                          <v-btn value="WECHAT_PAY" block><v-icon left>mdi-wechat</v-icon>微信支付</v-btn>
                        </v-btn-toggle>
                        <v-btn outlined block color="indigo" class="mt-2" @click="checkout" :loading="pay.loading"><v-icon left>mdi-check</v-icon>提交订单</v-btn>
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
                <v-row v-if="false">
                  <v-col cols="12">
                    <v-card color="color-spring" dark>
                      <v-card-title>春节限定兑换</v-card-title>
                      <v-card-subtitle>活动期间任意消费均可凭订单号领取7天Pro会员</v-card-subtitle>
                      <v-card-text>
                        <v-text-field solo-inverted label="输入订单号再领7天 按回车键提交" placeholder="按回车键提交" v-model="promo.id" :disabled="promo.loading" :loading="promo.loading" @keyup.enter.native="NewYearPromo"/>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-subheader>使用CD-Key激活<v-divider inset/></v-subheader>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-alert type="info" color="indigo">如果您是使用其他支付方式购得一串代码，请在下方输入</v-alert>
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
                <v-alert type="info" color="indigo">如果您是通过活动获得一串代码，请在下方输入</v-alert>
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
                  <v-col cols="12" style="user-select: text">
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
                  <div>打开手机{{ getMethodText }}扫扫一扫</div>
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
                  <v-btn text :color="getBtnColor" block @click="openAlipay">
                    <v-icon left>mdi-open-in-new</v-icon>
                    转跳至手机{{ getMethodText }}
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
import LoadingBar from "@/components/Layout/LoadingBar";
export default {
  name: "ProMain",
  components: {LoadingBar, vueQr},
  data: () => {
    return {
      timer : 0,
      sheet: false,
      pay: {
        id: '',
        url: '',
        amount: '',
        method: 'ALIPAY',
        loading: false,
      },
      choose: 0,
      prices: [],
      promo: {
        loading: false,
        id: "",
      },
      promos: [],
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
          { text: '支付方式', value: 'paymentMethod' },
          { text: '状态', value: 'tradeStatus' },
        ],
      }
    }
  },
  computed: {
    getPrice: function () {
      return this.priceLoading ? '' : this.prices[this.choose].price
    },
    getBtnColor: function () {
      switch (this.pay.method) {
        case "ALIPAY":
          return "blue"
        case "WECHAT_PAY":
          return "green"
        default :
          return "white"
      }
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
    getMethodText: function () {
      switch (this.pay.method) {
        case "ALIPAY":
          return "支付宝"
        case "WECHAT_PAY":
          return "微信"
        default :
          return ""
      }
    }
  },

  created() {
    this.priceLoading = true
    this.pro.getAllPrice(this, function (that, data) {
      data.forEach(function (e) {
        if (e.name.indexOf("promo") !== -1) {
          that.promos.push(e)
        }
      })
      that.prices = data
      that.priceLoading = false
    }, function (that, data) {
      that.priceLoading = false
      that.snackbar.Launch(that, "价格获取失败:" + data.msg)
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
    openAlipay: function () {
      window.open(this.pay.url,'_blank','')
    },

    joinGroup: function() {
      window.open('https://jq.qq.com/?_wv=1027&k=fpSU3I0y','_blank','')
    },

    checkout: function () {
      let select = this.prices[this.choose];
      this.pay.loading = true
      this.payment.CreatePayment(
          this,
          select.price,
          select.name.split("_")[1] === "promo" ? select.name.split("_")[2] + '-UltiKits会员' : select.name.split("_")[1] + '-UltiKits会员',
          this.pay.method,
          function (that, data) {
        that.pay.id = data.outTradeNo
        that.pay.amount = select.price
        that.pay.url = data.qrCode
        that.pay.loading = false
        that.sheet = true
        that.timer = setInterval(that.check,5000);
      }, function (that) {
        that.init.check(that, function () {
          that.payment.CreatePayment(
              that,
              select.price,
              select.name.split("_")[1] === "promo" ? select.name.split("_")[2] + '-UltiKits会员' : select.name.split("_")[1] + '-UltiKits会员',
              that.pay.method,
              function (that, data) {
            that.pay.id = that.pay.method === "ALIPAY" ? data.alipay_trade_precreate_response.out_trade_no : ""
            that.pay.amount = select.price
            that.pay.url = that.pay.method === "ALIPAY" ? data.alipay_trade_precreate_response.qr_code : data.qr_code
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
    },
    NewYearPromo: function () {
      this.promo.loading = true
      this.code.promo(this, this.promo.id, function (that) {
        that.init.check(that, function () {
          that.snackbar.Launch(that, 'Pro兑换成功')
          that.promo.loading = false
        })
      }, function (that) {
        that.init.check(that, function () {
          that.code.promo(that, that.promo.id, function (that) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro兑换成功')
              that.promo.loading = false
            })
          }, function (that, data) {
            that.init.check(that, function () {
              that.snackbar.Launch(that, 'Pro兑换失败: ' + data.msg)
              that.promo.loading = false
            })
          })
        })
      })
    },
  }
}
</script>

<style scoped>

</style>
