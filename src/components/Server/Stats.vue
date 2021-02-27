<template>
  <v-card>
    <v-card-text>
      <v-hover v-slot="{ hover }">
        <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
          此页面仅供演示,相关功能仍在开发中
        </v-alert>
      </v-hover>
      <v-row>
        <v-col cols="12" sm="12" lg="6">
          <v-card class="mx-auto text-center" color="indigo" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
              </v-sheet>
            </v-card-text>
            <v-card-text>
              近24小时玩家统计(单位: H)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
          <v-card class="mx-auto text-center" color="indigo" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
              </v-sheet>
            </v-card-text>
            <v-card-text>
              近24小时服务器TPS(单位: H)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
          <v-card class="mx-auto text-center" color="indigo" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
              </v-sheet>
            </v-card-text>
            <v-card-text>
              近24小时服务器内存使用率(单位: H)
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
          <v-card class="mx-auto text-center" color="indigo" dark>
            <v-card-text>
              <v-sheet color="rgba(0, 0, 0, .12)">
                <v-sparkline :value="value" color="white" height="100" padding="24" stroke-linecap="round" smooth :labels="times"/>
              </v-sheet>
            </v-card-text>
            <v-card-text>
              近24小时服务器CPU使用率(单位: H)
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Stats",
  data() {
    return {
      value: [423, 446, 675, 510, 760, 590, 590, 610, 760, 590, 610, 446, 675, 590, 590, 590, 610, 423, 446, 590, 610, 446, 610, 760],
      times: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    }
  }
}
</script>

<style scoped>

</style>