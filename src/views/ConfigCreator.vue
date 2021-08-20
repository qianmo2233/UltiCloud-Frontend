<template>
  <div>
    <v-row>
      <v-col cols="12">
        <h1>配置文件生成器</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-alert type="warning">该功能仍在开发中</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-tabs center-active>
          <v-tab><v-icon left>mdi-minecraft</v-icon>主配置文件</v-tab>
          <v-tab><v-icon left>mdi-volume-high</v-icon>公告</v-tab>
          <v-tab><v-icon left>mdi-bag-personal</v-icon>远程背包</v-tab>
          <v-tab><v-icon left>mdi-chat</v-icon>聊天</v-tab>
          <v-tab><v-icon left>mdi-lock</v-icon>箱子锁</v-tab>
          <v-tab><v-icon left>mdi-notification-clear-all</v-icon>清道夫</v-tab>
          <v-tab><v-icon left>mdi-view-compact</v-icon>自定义GUI</v-tab>
          <v-tab><v-icon left>mdi-emoticon-dead</v-icon>死亡惩罚</v-tab>
          <v-tab><v-icon left>mdi-home</v-icon>家</v-tab>
          <v-tab><v-icon left>mdi-fire</v-icon>入服欢迎</v-tab>
          <v-tab><v-icon left>mdi-map-marker</v-icon>主城</v-tab>
          <v-tab><v-icon left>mdi-login</v-icon>登录</v-tab>
          <v-tab><v-icon left>mdi-swap-horizontal-bold</v-icon>交易</v-tab>
          <v-tab><v-icon left>mdi-earth-box</v-icon>世界</v-tab>
          <v-tab-item><MainConfig/></v-tab-item>
          <v-tab-item><AnnouncementConfig/></v-tab-item>
          <v-tab-item><RemoteBagConfig/></v-tab-item>
          <v-tab-item><ChatConfig/></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
          <v-tab-item></v-tab-item>
        </v-tabs>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MainConfig from "@/components/ConfigCreator/MainConfig";
import AnnouncementConfig from "@/components/ConfigCreator/AnnouncementConfig";
import RemoteBagConfig from "@/components/ConfigCreator/RemoteBagConfig";
import ChatConfig from "@/components/ConfigCreator/ChatConfig";
export default {
  name: "ConfigCreator",
  components: {ChatConfig, RemoteBagConfig, AnnouncementConfig, MainConfig}
}
</script>

<style scoped>

</style>