<template>
  <v-card>
    <v-card-text>
      <v-hover v-slot="{ hover }">
        <v-alert border="left" colored-border type="warning" :elevation="hover ? 12 : 6" :class="{ 'on-hover': hover }">
          此页面仅供演示,相关功能仍在开发中
        </v-alert>
      </v-hover>
      <v-row>
        <v-col cols="12">
          <v-toolbar dense dark>
            <v-toolbar-items>
              <v-btn text @click="clean"><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-delete</v-icon>{{ $vuetify.breakpoint.smAndUp ? '清空日志' : '' }}</v-btn>
            </v-toolbar-items>
            <v-toolbar-items>
              <v-btn text @click="scrollToBottom"><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-format-vertical-align-bottom</v-icon>{{ $vuetify.breakpoint.smAndUp ? '移至底部' : '' }}</v-btn>
            </v-toolbar-items>
            <v-toolbar-items>
              <v-btn text><v-icon :left="$vuetify.breakpoint.smAndUp">mdi-code-tags</v-icon>{{ $vuetify.breakpoint.smAndUp ? '快捷指令' : '' }}</v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-sheet height="500" width="auto" dark class="console" id="sheet">
            <code v-for="(logs, log) in logs" :key="log" class="logs">{{ logs }}<br/></code>
          </v-sheet>
          <v-toolbar dark>
            <v-text-field single-line prefix="/" label="在这里输入您的指令" hide-details v-model="cmd">
              <v-btn text slot="append-outer" @click="send">
                <v-icon>mdi-send</v-icon>
              </v-btn>
            </v-text-field>
          </v-toolbar>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Console",
  data() {
    return {
      cmd: '',
      logs: [
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.Miner.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.a(MinecraftServer.java:1182)',
        '[15:14:30 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.run(MinecraftServer.java:971)',
        '[15:14:30 ERROR]:  java.lang.Thread.run(Unknown Source)',
        '[15:14:30 ERROR]: ------------------------------',
        '[15:14:30 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH ---',
        '[15:14:30 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH  - git-Paper-391 (MC: 1.15.2) ---',
        '[15:14:38 ERROR]: The server has not responded for 22 seconds! Creating thread dump',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: Server thread dump (Look for plugins here before reporting to Paper!):',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: Current Thread: Server thread',
        '[15:14:38 ERROR]:  PID: 17 | Suspended: false | Native: false | State: RUNNABLE',
        '[15:14:38 ERROR]:  Stack:',
        '[15:14:38 ERROR]:  java.util.concurrent.ConcurrentHashMap$Traverser.advance(Unknown Source)',
        '[15:14:38 ERROR]:  java.util.concurrent.ConcurrentHashMap.forEach(Unknown Source)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.PlayerChunk.a(PlayerChunk.java:736)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.a(ChunkMapDistance.java:117)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.tickDistanceManager(ChunkProviderServer.java:639)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkMapDistance.markAreaHighPriority(ChunkMapDistance.java:235)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ChunkProviderServer.markAreaHighPriority(ChunkProviderServer.java:455)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.PlayerList.a(PlayerList.java:177)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.c(LoginListener.java:174)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.LoginListener.tick(LoginListener.java:65)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.NetworkManager.a(NetworkManager.java:380)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.ServerConnection.c(ServerConnection.java:142)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.b(MinecraftServer.java:1354)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.DedicatedServer.b(DedicatedServer.java:431)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.a(MinecraftServer.java:1182)',
        '[15:14:38 ERROR]:  net.minecraft.server.v1_15_R1.MinecraftServer.run(MinecraftServer.java:971)',
        '[15:14:38 ERROR]:  java.lang.Thread.run(Unknown Source)',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:38 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH ---',
        '[15:14:38 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: --- DO NOT REPORT THIS TO PAPER - THIS IS NOT A BUG OR A CRASH  - git-Paper-391 (MC: 1.15.2) ---',
        '[15:14:44 ERROR]: The server has not responded for 28 seconds! Creating thread dump',
        '[15:14:44 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: Server thread dump (Look for plugins here before reporting to Paper!):',
        '[15:14:44 ERROR]: ------------------------------',
        '[15:14:44 ERROR]: Current Thread: Server thread',
        '[15:14:44 ERROR]:  PID: 17 | Suspended: false | Native: false | State: RUNNABLE',
      ],
    }
  },
  methods: {
    clean() {
      this.logs = []
    },
    send() {
      if (this.cmd) {
        const date = require('moment')
        let time = new Date();
        this.logs.push('[' + date(time).format('HH:mm:ss') + ' ' + '控制台' + ']: ' + this.cmd)
        this.cmd = ''
        this.scrollToBottom()
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        let sheet = document.getElementById('sheet')
        sheet.scrollTop = sheet.scrollHeight
      })
    }
  },
  created() {
    this.scrollToBottom()
  }
}
</script>

<style scoped>
.console {
  overflow-y: auto;
  user-select: text;
  -webkit-user-select: text;
  display: flex;
  flex-direction: column
}
.logs {
  word-wrap:break-word;
  word-break:break-all;
}
</style>