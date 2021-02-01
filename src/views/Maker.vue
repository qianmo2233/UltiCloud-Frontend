<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">制作人员</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-card color="teal" dark>
          <v-card-title class="headline">
            qianmo千沫
          </v-card-title>
          <v-card-subtitle><v-row><v-col cols="12"><v-chip color="primary">前端</v-chip></v-col></v-row></v-card-subtitle>
          <v-card-text>其实是一个前端废物......也就只能写一写这种没有技术含量的东西了</v-card-text>
          <v-card-actions>
            <v-btn text>GitHub主页</v-btn>
            <v-btn text>McBBS主页</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card color="pink" dark>
          <v-card-title class="headline">
            wisdomme
          </v-card-title>
          <v-card-subtitle><v-row><v-col cols="12"><v-chip color="primary">后端</v-chip></v-col></v-row></v-card-subtitle>
          <v-card-text>UltiKits系列插件作者</v-card-text>
          <v-card-actions>
            <v-btn text>GitHub主页</v-btn>
            <v-btn text>McBBS主页</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <h1 class="text-center">？？？？？还有谁呢？？？？？</h1>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
name: "Maker"
}
</script>

<style scoped>

</style>