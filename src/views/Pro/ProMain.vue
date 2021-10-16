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
                <v-btn text>
                  开始试用
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
                    <v-list-item-group mandatory color="indigo">
                      <v-list-item>
                        <v-list-item-title>30 天</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon left>mdi-tag</v-icon>
                          折扣: - 0%
                        </v-list-item-subtitle>
                        <v-list-item-action-text>20 CNY</v-list-item-action-text>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>60 天</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon left>mdi-tag</v-icon>
                          折扣: - 0%
                        </v-list-item-subtitle>
                        <v-list-item-action-text>40 CNY</v-list-item-action-text>
                      </v-list-item>
                      <v-list-item>
                        <v-list-item-title>120 天</v-list-item-title>
                        <v-list-item-subtitle>
                          <v-icon left>mdi-tag</v-icon>
                          折扣: - 0%
                        </v-list-item-subtitle>
                        <v-list-item-action-text>80 CNY</v-list-item-action-text>
                      </v-list-item>
                    </v-list-item-group>
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
                        <div>总计: <h1>30.00</h1> CNY</div>
                      </v-col>
                      <v-col cols="6">
                        <v-btn color="primary" class="mb-2" block dark>
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
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ProMain",
  data: () => {
    return {
      prices: []
    }
  },

  created() {
    this.pro.getAllPrice(this, function (that, data) {
      that.prices = data
    }, function (that, data) {
      that.snackbar.Launch(that, "价格获取失败:" + data.msg)
    })
  }
}
</script>

<style scoped>

</style>