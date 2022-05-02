<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>实用工具</h1>
        <p>更方便地管理服务器</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" lg="6" sm="12">
        <backdrop-card hover rel="noopener">
          <template #backdrop>
            <v-icon>mdi-server</v-icon>
          </template>
          <v-icon x-large style="opacity: 0.9">mdi-server</v-icon>
          <h2 class="heading my-1">服务器监控</h2>
          <h3 class="subtitle-2">数据统计，报错分析......</h3>
        </backdrop-card>
      </v-col>
      <v-col cols="12" md="6" lg="6" sm="12">
        <backdrop-card hover rel="noopener">
          <template #backdrop>
            <v-icon>mdi-server</v-icon>
          </template>
          <v-icon x-large style="opacity: 0.9">mdi-server</v-icon>
          <h2 class="heading my-1">敬请期待</h2>
          <h3 class="subtitle-2">更多功能还在路上...</h3>
        </backdrop-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import BackdropCard from "@/components/Layout/BackdropCard";
export default {
  name: "Tools",
  components: {BackdropCard},
  data: () => {
    return {
    }
  },
  methods: {
  },
}
</script>

<style scoped>

</style>