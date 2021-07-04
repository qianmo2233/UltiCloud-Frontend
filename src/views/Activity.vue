<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-toolbar flat color="rgba(0,0,0,0)">
          <v-toolbar-title>活动专区</v-toolbar-title>
          <v-spacer/>
          <v-btn text @click="dialog = true"><v-icon left>mdi-swap-horizontal</v-icon>使用兑换码</v-btn>
        </v-toolbar>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-timeline dense clipped class="card-translate-up">
          <v-timeline-item fill-dot>
            <template v-slot:icon>
              <v-icon>mdi-flag-checkered</v-icon>
            </template>
            <v-alert text color="info" class="card-translate-up">
              <h3 class="headline">免费体验UltiKits会员!</h3>
              <div>每一个新用户都可以免费领取7天的UltiKits的Pro会员!<br>不试试,如何知道好不好?</div>
              <v-divider class="my-4 info" style="opacity: 0.22"></v-divider>
              <v-row align="center" no-gutters>
                <v-col class="grow">
                  需要通过邮箱验证才能领取<br>已是UltiKits会员不可领取
                </v-col>
                <v-spacer></v-spacer>
                <v-col class="shrink">
                  <v-btn color="info" outlined to="/vip" :disabled="$store.state.user.pro === 'true'">
                    {{ $store.state.user.pro === 'true' ? '您已是Pro会员' : '前往领取' }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-timeline-item>
          <v-timeline-item color="teal" class="card-translate-up">
            Coming soon...
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
    <v-dialog max-width="500" v-model="dialog">
      <v-card max-width="500">
        <v-card-title>使用兑换码</v-card-title>
        <v-card-text>
          <v-alert border="left" colored-border type="info" elevation="6" color="blue">
            此处是使用通过活动获取的兑换码，如果您要使用购买的激活码,请点击 <router-link to="/vip">此处</router-link>
          </v-alert>
          <v-text-field v-model="code" label="兑换码"/>
          <v-btn block color="blue" :loading="loading" :disabled="loading" @click="redeem"><v-icon left>mdi-check</v-icon>兑换</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import anime from "animejs";

export default {
  name: "Activity",
  data() {
    return {
      dialog: false,
      loading: false,
      code: '',
    }
  },
  methods: {
    redeem: function () {
      this.$Cdk.redeem(this, 1, this.code)
    }
  },
  mounted () {
    setTimeout(() => {
      try {
        anime({
          targets: '.card-translate-up',
          translateY: [48, 0],
          opacity: [0, 1],
          duration: 625,
          delay: anime.stagger(75),
          easing: "easeOutQuint"
        })
        anime({
          targets: ['.card-translate-up h1', '.card-translate-up h2', '.card-translate-up p', '.card-translate-up span:not(.v-btn__content)'],
          translateY: [48, 0],
          opacity: [0, 1],
          duration: 625,
          delay: anime.stagger(25),
          easing: "easeOutQuint"
        })
        anime({
          targets: ['.card-fade-appear'],
          scaleY: [1.1, 1],
          duration: 325,
          easing: "easeOutQuint"
        })
      } catch (e) {
        console.warn("HomeAnimation", "error when animating home entry animation", e)
      }
    }, 0);
  }
}
</script>

<style scoped>

</style>