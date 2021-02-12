<template>
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
        <v-btn color="info" outlined disabled="disabled">活动未开始</v-btn>
      </v-col>
    </v-row>
  </v-alert>
</template>

<script>
export default {
  name: "EvalCard"
}
</script>

<style scoped>

</style>